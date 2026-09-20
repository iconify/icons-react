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
		"content": `<style>.a2rsdhb4f {
  d: path("M12 14v3");
}

.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="bo51iypxr"/><path class="a2rsdhb4f"/></g>`,
		"fallback": "iconmind:lockfile-outline-thin",
	});
}

export default Component;
