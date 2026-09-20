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
		"content": `<style>.jshnfrb6g {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm0 0V6zm7.308-1.038H19v-5.693h-7.692zm1-1v-3.693H18v3.692z");
}
</style><path class="jshnfrb6g"/>`,
		"fallback": "material-symbols-light:picture-in-picture-alt-outline-sharp",
	});
}

export default Component;
