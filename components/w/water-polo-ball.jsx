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

.j4nmzzb_k {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m-2 11q2.25-1.75 4.5 0t4.5 0t4.5 0t4.5 0");
}

.owm-v3b9w {
  d: path("M12 2.5q-3 7 0 14");
}

.vcoi6eblj {
  d: path("M5.5 7q6.5 4 13 0");
}
</style><g class="hntgybcog"><path class="j4nmzzb_k"/><path class="vcoi6eblj"/><path class="owm-v3b9w"/></g>`,
		"fallback": "uix:water-polo-ball",
	});
}

export default Component;
