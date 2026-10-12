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

.kczllxb8r {
  d: path("m5.47 7.27l.81-3.54q.22-.98 1.2-.76l4.79 1.06q.98.22.74 1.19l-.52 2.06q-.24.97-1.24.97h-5q-1 0-.78-.98");
}

.l7ctzjb7p {
  d: path("M2.75 13.25h18.5");
}

.n2bru-u-z {
  width: 18.5px;
  height: 12.75px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><path class="kczllxb8r"/><rect class="n2bru-u-z"/><path class="l7ctzjb7p"/></g>`,
		"fallback": "iconoven:travel-wallet",
	});
}

export default Component;
