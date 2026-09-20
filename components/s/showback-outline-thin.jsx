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
		"content": `<style>.ashnowcpl {
  d: path("M7.3 10.29a5 5 0 0 1 9.4 0");
}

.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nnzlfsekh {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.teszqoqtj {
  d: path("M5.5 10.5v3");
}

.zqsgc7abe {
  d: path("M18.5 10.5v3");
}
</style><g class="hntgybcog"><path class="nnzlfsekh"/><path class="teszqoqtj"/><path class="zqsgc7abe"/><path class="ashnowcpl"/><path class="bo51iypxr"/></g>`,
		"fallback": "iconmind:showback-outline-thin",
	});
}

export default Component;
