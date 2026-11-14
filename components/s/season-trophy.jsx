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
		"content": `<style>.etxt66b7m {
  d: path("M5 3.5h10v5a5 5 0 0 1-10 0Zm5 10v7m-4 0h7.3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9kktibch {
  d: path("M5 5.5H2v2a3 3 0 0 0 3.5 3.25M15 5.5h3v2a3 3 0 0 1-3.5 3.25m3.764 4.292l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><g class="hntgybcog"><path class="etxt66b7m"/><path class="z9kktibch"/></g>`,
		"fallback": "uix:season-trophy",
	});
}

export default Component;
