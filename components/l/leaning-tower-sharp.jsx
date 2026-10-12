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
		"content": `<style>.ri41r1cyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 21.25h5.75l.11-.74L16.7 8.24l.11-.74h-6.5l-.11.74l-1.84 12.27l-.11.74zM11.81 7.5h4l.07-.49l.42-2.77l.07-.49h-4.5l-.07.49l-.42 2.77l-.07.49zM8.78 17.75h6.5m-5.98-3.5h6.5m-5.97-3.5h6.5m-9.58 10.5h10.5");
}
</style><path class="ri41r1cyc"/>`,
		"fallback": "iconoven:leaning-tower-sharp",
	});
}

export default Component;
