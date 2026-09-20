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
		"content": `<style>.jxgkv6s4q {
  d: path("M11 8v8h6V8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
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
</style><g class="nrj6p8qat"><path class="uk66x15py"/><path class="wuvisubmw"/><path class="jxgkv6s4q"/><path class="sxbibil-o"/></g>`,
		"fallback": "iconmind:memory-album-outline-regular",
	});
}

export default Component;
