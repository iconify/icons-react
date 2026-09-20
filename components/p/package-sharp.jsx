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
		"content": `<style>.gaevpkbbp {
  fill: currentColor;
  d: path("M7 17h5v-2H7zm-4 4V3h18v18zM8 5v8l4-2l4 2V5z");
}
</style><path class="gaevpkbbp"/>`,
		"fallback": "material-symbols:package-sharp",
	});
}

export default Component;
