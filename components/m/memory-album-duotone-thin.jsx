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

.jxgkv6s4q {
  d: path("M11 8v8h6V8Z");
}

.sxbibil-o {
  d: path("m11 14 2 -2 3 3");
}

.uk66x15py {
  d: path("M4 3v18h16V3Z");
}

.wuvisubmw {
  d: path("M8 3v18");
}

.x5ujzyh2u {
  fill: currentColor;
  d: path("M4 3v18h16V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yajmtkb-r {
  fill: currentColor;
  d: path("M11 8v8h6V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="x5ujzyh2u"/><path class="yajmtkb-r"/><path class="uk66x15py"/><path class="wuvisubmw"/><path class="jxgkv6s4q"/><path class="sxbibil-o"/></g>`,
		"fallback": "iconmind:memory-album-duotone-thin",
	});
}

export default Component;
