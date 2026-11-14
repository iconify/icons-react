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
		"content": `<style>.b3rwd2brh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5a5 5 0 0 1 10 0Zm0 0l5 5m5-5l-5 5m-9.5 6a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0Zm9.5 0h.01");
}
</style><path class="b3rwd2brh"/>`,
		"fallback": "uix-sharp:skydive-drop-zone",
	});
}

export default Component;
