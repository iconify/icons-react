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
		"content": `<style>.g-ytdqins {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h4v12h-4zm6.25 4h4v8H9zm9-10.5V19.5m-3.25-3L18 19.75l3.25-3.25");
}
</style><path class="g-ytdqins"/>`,
		"fallback": "iconoven:metric-down-sharp",
	});
}

export default Component;
