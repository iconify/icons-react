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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.h7g2xihjl {
  d: path("m12 8 3 3 -3 3 -3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5i79a2na {
  d: path("M12 14v4");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="h7g2xihjl"/><path class="w5i79a2na"/></g>`,
		"fallback": "iconmind:threat-model-outline-thin",
	});
}

export default Component;
