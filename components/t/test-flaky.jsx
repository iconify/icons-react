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
		"content": `<style>.fbw85_bse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.318 15.439l2.121-2.121a3 3 0 0 1 4.243 0a3 3 0 0 1 0 4.243l-2.121 2.121a3 3 0 0 1-4.243 0a3 3 0 0 1 0-4.243m9-9l2.121-2.121a3 3 0 0 1 4.243 0a3 3 0 0 1 0 4.243l-2.121 2.121a3 3 0 0 1-4.243 0a3 3 0 0 1 0-4.243M16 16l2 2M8 8L6 6");
}
</style><path class="fbw85_bse"/>`,
		"fallback": "uix:test-flaky",
	});
}

export default Component;
