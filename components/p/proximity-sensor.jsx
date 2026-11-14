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
		"content": `<style>.h7ly9db3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h10v6h-10ZM2 12h2.5m3-3v6m9.121-5.121a3 3 0 0 1 0 4.242m2.284-5.817a5.75 5.75 0 0 1 0 7.392");
}
</style><path class="h7ly9db3u"/>`,
		"fallback": "uix-sharp:proximity-sensor",
	});
}

export default Component;
