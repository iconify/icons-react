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
		"content": `<style>.u47d-ttlc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15V6h-15ZM6 6v12M18 6v6.7m-6.4 8.8H4.5V18h8.2M9 10h6m-6 3.5h3.7M15 21l6-6m-5.5.5h.01m4.99 5h.01");
}
</style><path class="u47d-ttlc"/>`,
		"fallback": "uix-sharp:transfer-tax",
	});
}

export default Component;
