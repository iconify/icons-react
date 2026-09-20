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
		"content": `<style>.bi-wyob_j {
  d: path("m8 12 4 -4 4 4");
}

.eqtg9zhcu {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5 2.5 2.5 0 0 1 19.5 7h-15A2.5 2.5 0 0 1 2 4.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h7bcztycq {
  d: path("M12 8v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jfvoq9bhn {
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5 2.5 2.5 0 0 1 19.5 7h-15A2.5 2.5 0 0 1 2 4.5");
}

.slz7u0oyn {
  d: path("M2 19.5A2.5 2.5 0 0 1 4.5 17h15a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5");
}

.zoomnj6dr {
  fill: currentColor;
  d: path("M2 19.5A2.5 2.5 0 0 1 4.5 17h15a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="eqtg9zhcu"/><path class="zoomnj6dr"/><path class="jfvoq9bhn"/><path class="slz7u0oyn"/><path class="h7bcztycq"/><path class="bi-wyob_j"/></g>`,
		"fallback": "iconmind:migration-up-duotone-thin",
	});
}

export default Component;
