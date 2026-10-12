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
		"content": `<style>.c-9neo9vw {
  width: 7px;
  height: 3.5px;
  x: 8.5px;
  y: 10.25px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.htop58bbz {
  d: path("M5.75 10.5v3m12.5-3v3");
}

.yu377lxga {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 7.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="yu377lxga"/><rect class="c-9neo9vw"/><path class="htop58bbz"/></g>`,
		"fallback": "iconoven:spirit-level",
	});
}

export default Component;
