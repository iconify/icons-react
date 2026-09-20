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
		"content": `<style>.b2pxrbbhs {
  d: path("M11 5v13");
}

.guktqcbqt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 11v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hf_gtezns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldsnzkb3g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 5v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nu6kj0bjf {
  d: path("M16 11v7");
}

.ohbum8bmx {
  d: path("M6 8v10");
}

.xmj6vmg4q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="xmj6vmg4q"/><path class="ldsnzkb3g"/><path class="guktqcbqt"/><path class="hf_gtezns"/><path class="ohbum8bmx"/><path class="b2pxrbbhs"/><path class="nu6kj0bjf"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:logits-duotone-thin",
	});
}

export default Component;
