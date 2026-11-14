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
		"content": `<style>.n2zhfls7m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-3.088 3.109-5.215Q7.833 4.75 12 4.75t7.141 2.035Q22.25 8.912 22.25 12t-3.109 5.215Q16.167 19.25 12 19.25t-7.141-2.035Q1.75 15.088 1.75 12");
}
</style><path class="n2zhfls7m"/>`,
		"fallback": "uix-solid:oval",
	});
}

export default Component;
