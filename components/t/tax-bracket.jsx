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
		"content": `<style>.j1uyq679f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.7 15.5H3v-4h4.75V7.25h4.5V3H17v10.1m-9.25-1.6v4m4.5-8.25v8.25m2.5 5.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="j1uyq679f"/>`,
		"fallback": "uix:tax-bracket",
	});
}

export default Component;
