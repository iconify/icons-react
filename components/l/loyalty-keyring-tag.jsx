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
		"content": `<style>.bo-dlzbdj {
  d: path("M14.25 9h2a5.25 5.25 0 0 1 5.25 5.25v2a5.25 5.25 0 0 1-5.25 5.25h-2A5.25 5.25 0 0 1 9 16.25v-2A5.25 5.25 0 0 1 14.25 9M2.5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.25 2.25l2 2");
}

.c4jllbc_t {
  fill: currentColor;
  d: path("m16.264 13.417l.162.368a1.5 1.5 0 0 0 1.222.887l.4.041a.562.562 0 0 1 .317.978l-.299.268a1.5 1.5 0 0 0-.467 1.436l.085.392a.562.562 0 0 1-.832.605l-.347-.202a1.5 1.5 0 0 0-1.51 0l-.347.202a.562.562 0 0 1-.832-.605l.085-.392a1.5 1.5 0 0 0-.467-1.436l-.299-.268a.562.562 0 0 1 .317-.978l.4-.041a1.5 1.5 0 0 0 1.222-.887l.162-.368a.562.562 0 0 1 1.028 0");
}

.e7gnbobvl {
  d: path("M11 11.75a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bo-dlzbdj"/><path class="e7gnbobvl"/><path class="c4jllbc_t"/></g>`,
		"fallback": "uix:loyalty-keyring-tag",
	});
}

export default Component;
