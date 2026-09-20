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
		"content": `<style>.a5tuk3h7e {
  d: path("M4 10h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m1pvpub-n {
  d: path("M7 10a5 5 0 0 1 10 0");
}

.orxbb2h0a {
  d: path("M3 20a3 3 0 0 1 0 -6h18a3 3 0 0 1 0 6Z");
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="hntgybcog"><path class="orxbb2h0a"/><path class="m1pvpub-n"/><path class="a5tuk3h7e"/><path class="zkgvk4bog"/></g>`,
		"fallback": "iconmind:wake-time-outline-thin",
	});
}

export default Component;
