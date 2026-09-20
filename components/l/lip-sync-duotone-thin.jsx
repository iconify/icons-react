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
		"content": `<style>.fijjj9b9u {
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iprvt7beg {
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
}

.nlll12bog {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.12 7.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vm_dpjzeo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xngqfftyb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20.54 6.46a5 5 0 0 1 0 7.08");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydk-7sp0t {
  d: path("M14.5 10a5.5 5.5 0 0 1 -11 0");
}
</style><g class="hntgybcog"><path class="vm_dpjzeo"/><path class="nlll12bog"/><path class="xngqfftyb"/><path class="ydk-7sp0t"/><path class="iprvt7beg"/><path class="fijjj9b9u"/></g>`,
		"fallback": "iconmind:lip-sync-duotone-thin",
	});
}

export default Component;
