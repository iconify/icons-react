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
		"content": `<style>.nwiwnrbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12H2M11.7394 7.87L8.0416 2.39C7.9242 2.22 8.0693 2 8.3021 2H15.6979C15.9307 2 16.0758 2.22 15.9585 2.39L12.2606 7.87C12.1442 8.04 11.8558 8.04 11.7394 7.87ZM11.7394 16.13L8.0416 21.61C7.9242 21.78 8.0693 22 8.3021 22H15.6979C15.9307 22 16.0758 21.78 15.9585 21.61L12.2606 16.13C12.1442 15.96 11.8558 15.96 11.7394 16.13Z");
}
</style><path class="nwiwnrbhj"/>`,
		"fallback": "keyline-icons:triangles-centerline-inward-horizontal",
	});
}

export default Component;
