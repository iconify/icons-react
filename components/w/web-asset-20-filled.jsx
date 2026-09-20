import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p9w6fklaj {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3.5 0a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z");
}
</style><path class="p9w6fklaj"/>`,
		"fallback": "fluent:web-asset-20-filled",
	});
}

export default Component;
