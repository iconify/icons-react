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
		"content": `<style>.g_inlmf6c {
  width: 16.5px;
  height: 9.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kg-797_ht {
  d: path("M7 5.75h10M7 9h10M3 12.25h18m-9 0V19m0 0l-4.5 2.25M12 19l4.5 2.25");
}
</style><g class="hntgybcog"><rect class="g_inlmf6c"/><path class="kg-797_ht"/></g>`,
		"fallback": "iconoven:music-stand",
	});
}

export default Component;
