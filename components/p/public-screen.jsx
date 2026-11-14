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
		"content": `<style>.kknwx51zs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19v10h-19Zm9.5 10v9m-3.5 0h7M12 5.25h.01M12 8v1.75");
}
</style><path class="kknwx51zs"/>`,
		"fallback": "uix-sharp:public-screen",
	});
}

export default Component;
