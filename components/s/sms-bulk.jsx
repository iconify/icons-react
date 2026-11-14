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
		"content": `<style>.htjynnbvq {
  d: path("M8.5 6.5v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1M5.5 14h.01m2.99 0h.01m2.99 0h.01");
}

.q5y7g7bqq {
  d: path("M5.5 9.5v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhan4ybcl {
  d: path("M2.5 11.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-3.5 2v-2h-1a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="zhan4ybcl"/><path class="q5y7g7bqq"/><path class="htjynnbvq"/></g>`,
		"fallback": "uix-sharp:sms-bulk",
	});
}

export default Component;
