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
		"content": `<style>.g4vcemb4i {
  d: path("M15 8v6h6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k3c7sdb4u {
  d: path("M3 17h18c-1 2 -4 4 -9 4s-8 -2 -9 -4");
}

.pz8cbl-0n {
  d: path("M12 4v10H2Z");
}
</style><g class="hntgybcog"><path class="pz8cbl-0n"/><path class="g4vcemb4i"/><path class="k3c7sdb4u"/></g>`,
		"fallback": "iconmind:sailing-outline-thin",
	});
}

export default Component;
