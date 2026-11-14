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
		"content": `<style>.dhisxz2yo {
  d: path("M19.5 2H10C6.9624 2 4.5 4.4624 4.5 7.5C4.5 10.5376 6.9624 13 10 13H12.5");
}

.e48yoqzgt {
  d: path("M17 2V22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im-zsp8zw {
  d: path("M12.5 2V22");
}
</style><g class="hntgybcog"><path class="dhisxz2yo"/><path class="im-zsp8zw"/><path class="e48yoqzgt"/></g>`,
		"fallback": "solar:paragraph-linear",
	});
}

export default Component;
