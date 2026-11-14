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
		"content": `<style>.u7y7habpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19v3.5h-19Zm3 3.5V21m13-3.5V21M3.5 7h17M7 3.5L3.5 7L7 10.5m10-7L20.5 7L17 10.5");
}
</style><path class="u7y7habpf"/>`,
		"fallback": "uix-sharp:stage-left-right",
	});
}

export default Component;
