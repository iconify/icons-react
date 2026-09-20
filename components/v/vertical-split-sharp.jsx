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
		"content": `<style>.imj-v9bph {
  fill: currentColor;
  d: path("M4 14.346v-1h7v1zM4 18v-1h7v1zm0-7.346v-1h7v1zM4 7V6h7v1zm10 11V6h6v12z");
}
</style><path class="imj-v9bph"/>`,
		"fallback": "material-symbols-light:vertical-split-sharp",
	});
}

export default Component;
