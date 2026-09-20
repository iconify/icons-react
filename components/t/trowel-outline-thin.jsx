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

.iuwfsxlzr {
  d: path("M10 4h4v3h-4Z");
}

.sfjortb-o {
  d: path("M12 7v5");
}

.zh6-txvmz {
  d: path("M7 12h10c0 4 -3 7 -5 9 -2 -2 -5 -5 -5 -9");
}
</style><g class="hntgybcog"><path class="zh6-txvmz"/><path class="sfjortb-o"/><path class="iuwfsxlzr"/></g>`,
		"fallback": "iconmind:trowel-outline-thin",
	});
}

export default Component;
