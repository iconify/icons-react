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
		"content": `<style>.drd1_mbsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 3h2.25A2.625 2.625 0 0 1 10.5 5.625v2.25A2.625 2.625 0 0 1 7.875 10.5h-2.25A2.625 2.625 0 0 1 3 7.875v-2.25A2.625 2.625 0 0 1 5.625 3m10.5 0h2.25A2.625 2.625 0 0 1 21 5.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-2.25A2.625 2.625 0 0 1 13.5 7.875v-2.25A2.625 2.625 0 0 1 16.125 3m-10.5 10.5h2.25a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 7.875 21h-2.25A2.625 2.625 0 0 1 3 18.375v-2.25A2.625 2.625 0 0 1 5.625 13.5m12.639 1.542l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><path class="drd1_mbsw"/>`,
		"fallback": "uix:sponsor-logo-wall",
	});
}

export default Component;
