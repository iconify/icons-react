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
		"content": `<style>.h2-2dgnfu {
  d: path("M12 3v18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzsvawc8s {
  d: path("m8 8 -4 4 4 4");
}

.u8aszkb6i {
  d: path("m16 8 4 4 -4 4");
}
</style><g class="hntgybcog"><path class="h2-2dgnfu"/><path class="hzsvawc8s"/><path class="u8aszkb6i"/></g>`,
		"fallback": "iconmind:reflect-outline-thin",
	});
}

export default Component;
