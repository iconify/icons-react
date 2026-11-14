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
		"content": `<style>.mult0yojt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.25 15.25a6.75 6.75 0 1 1-8.5-8.5a5.5 5.5 0 0 0 8.5 8.5m.604-11.604l.119.389a1.5 1.5 0 0 0 .992.992l.389.119a.37.37 0 0 1 0 .708l-.389.119a1.5 1.5 0 0 0-.992.992l-.119.389a.37.37 0 0 1-.708 0l-.119-.389a1.5 1.5 0 0 0-.992-.992l-.389-.119a.37.37 0 0 1 0-.708l.389-.119a1.5 1.5 0 0 0 .992-.992l.119-.389a.37.37 0 0 1 .708 0");
}
</style><path class="mult0yojt"/>`,
		"fallback": "uix:theme-dark",
	});
}

export default Component;
