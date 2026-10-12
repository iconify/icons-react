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
		"content": `<style>.eewzgee1j {
  d: path("M7 12.75v8.5m10-8.5v8.5m-6.75 0v-5h3.5v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jmcn70fyb {
  d: path("m4.94 10.59l6.62-6.18q.44-.41.88 0l6.62 6.18q.44.41-.16.41H5.1q-.6 0-.16-.41");
}

.qsuisubvm {
  width: 18.5px;
  height: 10.25px;
  x: 2.75px;
  y: 11px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="jmcn70fyb"/><rect class="qsuisubvm"/><path class="eewzgee1j"/></g>`,
		"fallback": "iconoven:portico",
	});
}

export default Component;
