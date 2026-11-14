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
		"content": `<style>.c7x-jdbji {
  d: path("M12.33 8.5h1.34a1.5 1.5 0 0 1 1.471 1.794l-.4 2A1.5 1.5 0 0 1 13.27 13.5h-.54a1.5 1.5 0 0 1-1.471-1.206l-.4-2A1.5 1.5 0 0 1 12.33 8.5m.67 8V19m-3.25-3L8.5 18m7.75-2l1.25 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zw58uonmq {
  d: path("M3 2.5v19M3 6h10v2.5m-10 2L7.5 6");
}
</style><g class="hntgybcog"><path class="zw58uonmq"/><path class="c7x-jdbji"/></g>`,
		"fallback": "uix:wall-street-light",
	});
}

export default Component;
