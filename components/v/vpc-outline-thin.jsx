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

.jnf_2db5t {
  d: path("M12 18v3");
}

.m7ezp3bui {
  d: path("M4 15a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 6a5.5 5.5 0 0 1 4.5 9Z");
}

.n8uuobb1z {
  d: path("M18 18v3");
}

.ojjdplbtx {
  d: path("M6 18v3");
}
</style><g class="hntgybcog"><path class="m7ezp3bui"/><path class="ojjdplbtx"/><path class="jnf_2db5t"/><path class="n8uuobb1z"/></g>`,
		"fallback": "iconmind:vpc-outline-thin",
	});
}

export default Component;
