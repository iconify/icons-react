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
		"content": `<style>.c4g909b2h {
  d: path("m12 17 -2.5 2.5L12 22");
}

.dxsw6io2t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 17 -2.5 2.5L12 22");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f7lw3rbsf {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 4.5H18a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i4kehh3pr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 19.5H6a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kj4zxsc0v {
  d: path("M9.5 19.5H6a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h3.5");
}

.og_x2j7xb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 2 2.5 2.5L12 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xaxtk6cud {
  d: path("M14.5 4.5H18a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-3.5");
}

.ymfnpaceh {
  d: path("m12 2 2.5 2.5L12 7");
}
</style><g class="hntgybcog"><path class="f7lw3rbsf"/><path class="i4kehh3pr"/><path class="og_x2j7xb"/><path class="dxsw6io2t"/><path class="xaxtk6cud"/><path class="kj4zxsc0v"/><path class="ymfnpaceh"/><path class="c4g909b2h"/></g>`,
		"fallback": "iconmind:sync-duotone-thin",
	});
}

export default Component;
