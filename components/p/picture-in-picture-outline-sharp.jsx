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
		"content": `<style>.d9gbh8bts {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V6H4zm7.308-5.308H19V7h-7.692zm1-1V8H18v3.692zM4 18V6z");
}
</style><path class="d9gbh8bts"/>`,
		"fallback": "material-symbols-light:picture-in-picture-outline-sharp",
	});
}

export default Component;
