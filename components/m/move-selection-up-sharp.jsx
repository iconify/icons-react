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
		"content": `<style>.a2x452giv {
  fill: currentColor;
  d: path("M6 14V2h12v12zm10 4v-2h2v2zM6 18v-2h2v2zm10 4v-2h2v2zm-5 0v-2h2v2zm-5 0v-2h2v2z");
}
</style><path class="a2x452giv"/>`,
		"fallback": "material-symbols:move-selection-up-sharp",
	});
}

export default Component;
