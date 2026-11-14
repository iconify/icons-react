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
		"content": `<style>.hzq__4bho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 12.8v8.7h-11V5h5.7M6.5 18.5h3m3.5-16h7a2 2 0 0 1 2 2V8a2 2 0 0 1-2 2v2.5L17.5 10H13a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2Z");
}
</style><path class="hzq__4bho"/>`,
		"fallback": "uix-sharp:two-factor-sms",
	});
}

export default Component;
