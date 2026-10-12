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
		"content": `<style>.c7b7y6b8n {
  width: 18.5px;
  height: 4.25px;
  x: 2.75px;
  y: 15px;
  rx: 2.125px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nvd3dy43r {
  d: path("M15.25 8.25V15m3-6.75V15");
}

.ylzixabbu {
  width: 9px;
  height: 6.75px;
  x: 12.25px;
  y: 8.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><rect class="c7b7y6b8n"/><rect class="ylzixabbu"/><path class="nvd3dy43r"/></g>`,
		"fallback": "iconoven:toothbrush",
	});
}

export default Component;
