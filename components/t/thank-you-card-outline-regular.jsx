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
		"content": `<style>.b2-xg2rvm {
  d: path("M12 16c-3 -2 -6 -4.5 -4.5 -7C9 7.5 11 8.5 12 10c1 -1.5 3 -2.5 4.5 -1 1.5 2.5 -1.5 5 -4.5 7");
}

.cnjkjfbvs {
  d: path("M3 5v14h18V5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cnjkjfbvs"/><path class="b2-xg2rvm"/></g>`,
		"fallback": "iconmind:thank-you-card-outline-regular",
	});
}

export default Component;
