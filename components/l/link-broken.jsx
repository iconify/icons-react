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
		"content": `<style>.kzsve4u3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5H7.5a4.5 4.5 0 0 0 0 9H9m6-9h1.5a4.5 4.5 0 0 1 0 9H15M12 3v2.5m0 13V21M8.5 3.5L9.25 5m6.25 15.5l-.75-1.5");
}
</style><path class="kzsve4u3o"/>`,
		"fallback": "uix:link-broken",
	});
}

export default Component;
