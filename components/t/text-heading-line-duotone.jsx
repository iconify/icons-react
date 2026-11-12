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
		"content": `<style>.btex5sb2a {
  d: path("M19 2V22");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkwpdacym {
  d: path("M5 12H19");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zyobk-bwz {
  d: path("M5 2V22");
}
</style><g class="hntgybcog"><path class="zyobk-bwz"/><path class="btex5sb2a"/><path class="jkwpdacym"/></g>`,
		"fallback": "solar:text-heading-line-duotone",
	});
}

export default Component;
