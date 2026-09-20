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
		"content": `<style>.pm5c37z-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2v20m-8 -6 16 -8M9 6l3 3 3 -3M9 18l3 -3 3 3");
}
</style><path class="pm5c37z-y"/>`,
		"fallback": "iconmind:snowflake-outline-thin",
	});
}

export default Component;
