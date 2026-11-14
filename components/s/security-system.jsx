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
		"content": `<style>.isvat1wkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19m-14 0V6a4.5 4.5 0 0 0 9 0V2.5M12 7h.01m5.132 5.128a8 8 0 0 1-10.284 0m12.025 3.702a12 12 0 0 1-13.766 0m14.633 3.593a15.5 15.5 0 0 1-15.5 0");
}
</style><path class="isvat1wkw"/>`,
		"fallback": "uix-sharp:security-system",
	});
}

export default Component;
