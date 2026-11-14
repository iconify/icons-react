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
		"content": `<style>.iqrx5m65l {
  d: path("M2.5 5.5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygl2qxb9b {
  d: path("M12 12.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 0h.01M6 10.5h3.5m-3.5 4h3.5");
}
</style><g class="ulnmmdpxh"><path class="iqrx5m65l"/><path class="ygl2qxb9b"/></g>`,
		"fallback": "uix-sharp:radio-dial-knob",
	});
}

export default Component;
