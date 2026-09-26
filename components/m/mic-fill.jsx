import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kxl3k0b4w {
  fill: currentColor;
  d: path("M8 5C8 2.790861 9.790861 1 12 1L12 1C14.209139 1 16 2.790861 16 5L16 11C16 13.209139 14.209139 15 12 15L12 15C9.790861 15 8 13.209139 8 11Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-qq-c8-s {
  d: path("M19 11C19 14.865993 15.865993 18 12 18C8.134007 18 5 14.865993 5 11M12 18V22M8 22H16");
}
</style><g class="nrj6p8qat"><path class="kxl3k0b4w"/><path class="o-qq-c8-s"/></g>`,
		"fallback": "keyline-icons:mic-fill",
	});
}

export default Component;
