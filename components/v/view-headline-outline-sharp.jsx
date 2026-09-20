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
		"content": `<style>.xevf-bbet {
  fill: currentColor;
  d: path("M4.5 14.385v-1h15v1zm0 3.769v-1h15v1zm0-7.538v-1h15v1zm0-3.77v-1h15v1z");
}
</style><path class="xevf-bbet"/>`,
		"fallback": "material-symbols-light:view-headline-outline-sharp",
	});
}

export default Component;
