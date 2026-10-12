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
		"content": `<style>.t90yzxb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25c-3 0-6 2-9.25 6.5C6 14 9 15.25 11 17.5h2c2-2.25 5-3.5 8.25-4.75C18 8.25 15 6.25 12 6.25m-1.75.25L9.5 3.75m4.25 2.75l.75-2.75M10 10.5h4m-2 7v3.75");
}
</style><path class="t90yzxb1f"/>`,
		"fallback": "iconoven:manta-ray",
	});
}

export default Component;
