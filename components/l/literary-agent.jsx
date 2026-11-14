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
		"content": `<style>.g25w_7bhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3 20.5c0-4.25 3-7 7-7c.405 0 .81.026 1.206.079M14 16h8v5.5h-8Zm2.5 0v-1.5h3V16");
}
</style><path class="g25w_7bhd"/>`,
		"fallback": "uix-sharp:literary-agent",
	});
}

export default Component;
