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
		"content": `<style>.gftjw_brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h12.5m-12.5 5h7.5m-7.5 5h5.5m7.43-4.25h1.64q1 0 1.71.71l1.51 1.51q.71.71.71 1.71v1.64q0 1-.71 1.71l-1.51 1.51q-.71.71-1.71.71h-1.64q-1 0-1.71-.71l-1.51-1.51q-.71-.71-.71-1.71v-1.64q0-1 .71-1.71l1.51-1.51q.71-.71 1.71-.71M14.5 16.5h4");
}
</style><path class="gftjw_brl"/>`,
		"fallback": "iconoven:stop-sequence",
	});
}

export default Component;
