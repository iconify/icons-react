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
		"content": `<style>.m02rt1bwx {
  d: path("M13 14V9h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sowhn7f6a {
  d: path("M6 4h14v10H6Z");
}

.uw5kuce7r {
  d: path("M3 3v18");
}

.v0nv9evjn {
  d: path("M6 9h7V4");
}
</style><g class="nrj6p8qat"><path class="uw5kuce7r"/><path class="sowhn7f6a"/><path class="v0nv9evjn"/><path class="m02rt1bwx"/></g>`,
		"fallback": "iconmind:motorsport-outline-regular",
	});
}

export default Component;
