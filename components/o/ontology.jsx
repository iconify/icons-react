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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw_1wjbym {
  d: path("M10 4.75H7.75a2 2 0 0 0-2 2V10M14 4.75h2.25a2 2 0 0 1 2 2V10m-12.5 4v3.25a2 2 0 0 0 2 2H9M18.25 14v3.25a2 2 0 0 1-2 2H15");
}

.sdmwb5g7r {
  width: 6px;
  height: 4px;
  x: 9px;
  y: 17.25px;
  rx: 1.5px;
}

.upiudebde {
  width: 6px;
  height: 4px;
  x: 15.25px;
  y: 10px;
  rx: 1.5px;
}

.z4exour5d {
  width: 6px;
  height: 4px;
  x: 2.75px;
  y: 10px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><circle class="e9-7-8-2z"/><rect class="z4exour5d"/><rect class="upiudebde"/><rect class="sdmwb5g7r"/><path class="rw_1wjbym"/></g>`,
		"fallback": "iconoven:ontology",
	});
}

export default Component;
