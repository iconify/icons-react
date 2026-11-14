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
		"content": `<style>.gvr4sabwn {
  d: path("M8 12.75V21h2.75M16 12.75V21h2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4_kdlbtd {
  d: path("M5.5 10.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.vg8s5abzj {
  d: path("M8 7.75a4 4 0 0 1 8 0");
}
</style><g class="hntgybcog"><path class="vg8s5abzj"/><path class="p4_kdlbtd"/><path class="gvr4sabwn"/></g>`,
		"fallback": "uix:multisig",
	});
}

export default Component;
