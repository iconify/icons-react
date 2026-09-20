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
		"content": `<style>.h9_plvb2m {
  fill: currentColor;
  d: path("M19 20q-.425 0-.712-.325t-.338-.775q-.2-2.575-1.263-4.825t-2.775-3.962T9.95 7.325T5.15 6.05q-.45-.05-.8-.337T4 5t.313-.712t.737-.263q3 .2 5.638 1.438T15.325 8.7t3.238 4.65T19.975 19q.025.425-.262.713T19 20");
}
</style><path class="h9_plvb2m"/>`,
		"fallback": "material-symbols:line-curve-outline-rounded",
	});
}

export default Component;
