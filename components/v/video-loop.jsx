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
		"content": `<style>.anv87bbgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11V9.75a3 3 0 0 1 3-3h12.5m-3-3l3 3l-3 3m2 3.25v1.25a3 3 0 0 1-3 3H3.75m3 3l-3-3l3-3m4.27-3.95l2.46 1.4q.52.3 0 .6l-2.46 1.4q-.52.3-.52-.3v-2.8q0-.6.52-.3");
}
</style><path class="anv87bbgl"/>`,
		"fallback": "iconoven:video-loop",
	});
}

export default Component;
