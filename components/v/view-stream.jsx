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
		"content": `<style>.ai8znbbzz {
  fill: currentColor;
  d: path("M3 19v-6h18v6zm0-8V5h18v6z");
}
</style><path class="ai8znbbzz"/>`,
		"fallback": "material-symbols:view-stream",
	});
}

export default Component;
