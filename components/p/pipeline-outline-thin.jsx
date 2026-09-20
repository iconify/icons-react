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

.qvq8nib-l {
  d: path("M2 12a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
}

.wg8_ddc1f {
  d: path("M6 12h6");
}

.zy1jzxj5t {
  d: path("M12.5 9.5 15 12l-2.5 2.5");
}
</style><g class="hntgybcog"><path class="qvq8nib-l"/><path class="wg8_ddc1f"/><path class="zy1jzxj5t"/></g>`,
		"fallback": "iconmind:pipeline-outline-thin",
	});
}

export default Component;
