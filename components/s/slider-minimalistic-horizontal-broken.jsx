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
		"content": `<style>.axjtsp52f {
  d: path("M8 6C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.75736 18 5.17157 18 8 18L16 18C18.8284 18 20.2426 18 21.1213 17.1213C22 16.2426 22 14.8284 22 12C22 9.17157 22 7.75736 21.1213 6.87868C20.2426 6 18.8284 6 16 6L12 6");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jmv52wbro {
  d: path("M4.5 3L19.5 3");
}

.r7ipq5s-n {
  d: path("M4.5 21L19.5 21");
}
</style><g class="ipq1z-bjh"><path class="jmv52wbro"/><path class="r7ipq5s-n"/><path class="axjtsp52f"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-broken",
	});
}

export default Component;
