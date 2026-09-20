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
		"content": `<style>.tez044jmu {
  fill: currentColor;
  d: path("M4 14.346v-1h7v1zM4 18v-1h7v1zm0-7.346v-1h7v1zM4 7V6h7v1zm10 11V6h6v12zm1-1h4V7h-4zm2-5");
}
</style><path class="tez044jmu"/>`,
		"fallback": "material-symbols-light:vertical-split-outline-sharp",
	});
}

export default Component;
