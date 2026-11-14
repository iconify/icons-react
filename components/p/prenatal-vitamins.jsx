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
		"content": `<style>.s3o07o27a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.112 17.91A4.2 4.2 0 0 1 10.5 18l-.25 3.5H5V17c-.75-1.5-1.25-4-1-6c.25-1.5.75-2.5 1.5-2.5h3c1 0 1.5.5 1.75 1.5l.25 1c2.284.685 3.734 2.206 3.776 3.989M5.25 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m10.098 13.073l2.475-2.475a2 2 0 0 1 2.829 0a2 2 0 0 1 0 2.829l-2.475 2.475a2 2 0 0 1-2.829 0a2 2 0 0 1 0-2.829m1.238-1.237l2.828 2.828");
}
</style><path class="s3o07o27a"/>`,
		"fallback": "uix:prenatal-vitamins",
	});
}

export default Component;
