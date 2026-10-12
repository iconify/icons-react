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

.rggpjjiew {
  width: 3px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 1px;
}

.tid5ihbau {
  width: 3px;
  height: 18.5px;
  x: 18.25px;
  y: 2.75px;
  rx: 1px;
}

.yt3a0mkpe {
  d: path("M8.75 7h6.5m-6.5 5h6.5m-6.5 5h6.5");
}
</style><g class="hntgybcog"><rect class="rggpjjiew"/><rect class="tid5ihbau"/><path class="yt3a0mkpe"/></g>`,
		"fallback": "iconoven:laser-grid",
	});
}

export default Component;
