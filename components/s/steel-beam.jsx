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
		"content": `<style>.deo8mbctu {
  d: path("M4.75 15.75h14.5M12 3v4.5m0 0l-6.5 5.75M12 7.5l6.5 5.75");
}

.dfn31__uv {
  width: 18.5px;
  height: 5px;
  x: 2.75px;
  y: 13.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="dfn31__uv"/><path class="deo8mbctu"/></g>`,
		"fallback": "iconoven:steel-beam",
	});
}

export default Component;
