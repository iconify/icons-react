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
		"content": `<style>.cbyozrp6o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 13v6H3V5h8a7.07 7.07 0 0 0 2 6c2.003 2.001 5.283 3.162 8 2");
}

.ft5dv1b6b {
  fill: none;
}

.lcc3-ij9f {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 13v6H3V5h8M3 5l6 6h4m3-7l4 4m0-4l-4 4");
}
</style><g class="ft5dv1b6b"><path class="cbyozrp6o"/><path class="lcc3-ij9f"/></g>`,
		"fallback": "coolicons:mail-close-duotone-sharp",
	});
}

export default Component;
