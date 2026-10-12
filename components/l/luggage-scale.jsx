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
		"content": `<style>.dyndcpbpd {
  width: 14.5px;
  height: 4px;
  x: 4.75px;
  y: 17.25px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx1i0kbik {
  d: path("M12 7.75v1.5m0 2v3m-2.25 3v-2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v2");
}

.k52uv_f-p {
  width: 5.5px;
  height: 5.5px;
  x: 9.25px;
  y: 5.75px;
  rx: 2px;
}

.s2gu1_bmm {
  d: path("M9.75 2.75h4.5m-2.25 0v3");
}
</style><g class="hntgybcog"><path class="s2gu1_bmm"/><rect class="k52uv_f-p"/><path class="hx1i0kbik"/><rect class="dyndcpbpd"/></g>`,
		"fallback": "iconoven:luggage-scale",
	});
}

export default Component;
