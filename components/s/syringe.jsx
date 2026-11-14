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
		"content": `<style>.jq0pcio_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.475 5.99l3.535 3.535l-7.071 7.071l-3.535-3.535Zm-1.061-1.061l5.657 5.657m-.353-5.304l-2.475 2.475m1.06-3.889l2.829 2.829m-10.96 8.131l-3.89 3.89m7.072-10.607l1.414 1.414m-3.536.707l1.414 1.414");
}
</style><path class="jq0pcio_d"/>`,
		"fallback": "uix-sharp:syringe",
	});
}

export default Component;
