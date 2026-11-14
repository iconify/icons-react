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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.syvezvktw {
  d: path("M5 5.5H2.5V7a3 3 0 0 0 2.75 3M15 5.5h2.5V7a3 3 0 0 1-2.75 3M10 13.5V18m-2.5 0h5m5.764-2.958l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}

.tktcy7bdi {
  d: path("M5 3.5h10v5a5 5 0 0 1-10 0Z");
}
</style><g class="hntgybcog"><path class="tktcy7bdi"/><path class="syvezvktw"/></g>`,
		"fallback": "uix:player-of-match",
	});
}

export default Component;
