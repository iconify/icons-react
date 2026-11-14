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
		"content": `<style>.gf0xjbclo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v16M21 4v16M3 6c3.5 11.5 14.5 11.5 18 0M3 6h18M8 6l.5 6.75M12 6v8.5M16 6l-.5 6.75");
}
</style><path class="gf0xjbclo"/>`,
		"fallback": "uix:insurance-safety-net",
	});
}

export default Component;
