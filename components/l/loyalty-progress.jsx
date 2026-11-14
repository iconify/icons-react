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
		"content": `<style>.eztgngbbu {
  d: path("M8.75 12H10m0 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m2.5 0h1.25");
}

.gxfb2ib8v {
  fill: currentColor;
  d: path("M2.5 12A1.25 1.25 0 1 0 5 12a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ol-q6bbap {
  d: path("M5 12h1.25");
}

.p74cllb1j {
  d: path("m18.264 9.542l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}

.qjdu1t-hz {
  fill: currentColor;
  d: path("M6.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="p74cllb1j"/><path class="gxfb2ib8v"/><path class="ol-q6bbap"/><path class="qjdu1t-hz"/><path class="eztgngbbu"/></g>`,
		"fallback": "uix:loyalty-progress",
	});
}

export default Component;
