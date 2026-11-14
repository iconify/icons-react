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

.ofrt1xqci {
  d: path("M5.5 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.rm3ssfbfh {
  d: path("M6 7.5h12a3.5 3.5 0 0 1 3.5 3.5v5.5A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5V11A3.5 3.5 0 0 1 6 7.5m3.5 0a2.5 2.5 0 0 1 5 0");
}

.z2hi2v3lw {
  d: path("M8.5 12.5v1.25h1m5-2.25h4m-4 4h4");
}
</style><g class="hntgybcog"><path class="rm3ssfbfh"/><path class="ofrt1xqci"/><path class="z2hi2v3lw"/></g>`,
		"fallback": "uix:radio-alarm-clock",
	});
}

export default Component;
