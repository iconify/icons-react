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

.n60ldbbqj {
  width: 6.5px;
  height: 4.5px;
  x: 14.75px;
  y: 5.25px;
  rx: 1px;
}

.po_c8huxq {
  width: 5.5px;
  height: 7.5px;
  x: 9.25px;
  y: 3.75px;
  rx: 1.5px;
}

.q5demqbms {
  d: path("M12 14.25c-1.25 1.5-2.25 2.75-2.25 4a2.25 2.25 0 0 0 4.5 0c0-1.25-1-2.5-2.25-4");
}

.wo-d63b2u {
  width: 6.5px;
  height: 4.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="wo-d63b2u"/><rect class="n60ldbbqj"/><rect class="po_c8huxq"/><path class="q5demqbms"/></g>`,
		"fallback": "iconoven:pipe-leak",
	});
}

export default Component;
