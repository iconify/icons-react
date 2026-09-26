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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oscy7xbgf {
  d: path("M6 4L3 4L3 22L21 22L21 4L18 4M3 13L21 13M12 1L12 9M8 5L16 5");
}

.uyfeqvb8a {
  fill: currentColor;
  d: path("M3 13L21 13L21 22L3 22L3 13Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="uyfeqvb8a"/><path class="oscy7xbgf"/></g>`,
		"fallback": "keyline-icons:table-rows-add-above-sharp-fill",
	});
}

export default Component;
