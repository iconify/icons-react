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
		"content": `<style>.c48umtbwr {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-3.384h16V6H4zM14.5 13.5h1v-2.192h2.192v-1H15.5V8.116h-1v2.192h-2.192v1H14.5z");
}
</style><path class="c48umtbwr"/>`,
		"fallback": "material-symbols-light:magnify-docked-sharp",
	});
}

export default Component;
