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
		"content": `<style>.d9vymbb8z {
  d: path("M17.5 19.25H21m-1.75-1.75V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.paqj8bb-u {
  width: 4px;
  height: 12px;
  x: 17.25px;
  y: 2.75px;
  rx: 2px;
}

.pfwoslw3w {
  d: path("M8.75 2.75v12m-6-6h12");
}

.rfuzhob9w {
  width: 12px;
  height: 4px;
  x: 2.75px;
  y: 17.25px;
  rx: 2px;
}

.rp0b5wbus {
  width: 12px;
  height: 12px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="rp0b5wbus"/><path class="pfwoslw3w"/><rect class="paqj8bb-u"/><rect class="rfuzhob9w"/><path class="d9vymbb8z"/></g>`,
		"fallback": "iconoven:lora-adapter",
	});
}

export default Component;
