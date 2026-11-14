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
		"content": `<style>.f6m2p9bly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.421 3h3.158a1.5 1.5 0 0 1 1.455 1.864l-.75 3A1.5 1.5 0 0 1 12.829 9h-1.658a1.5 1.5 0 0 1-1.455-1.136l-.75-3A1.5 1.5 0 0 1 10.421 3M12 9v12.5m-9 0h18m-13.5-11L5 14m11.5-3.5L19 14");
}
</style><path class="f6m2p9bly"/>`,
		"fallback": "uix:pedestrian-lamp",
	});
}

export default Component;
