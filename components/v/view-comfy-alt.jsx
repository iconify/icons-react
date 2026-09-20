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
		"content": `<style>.kmj9aab0w {
  fill: currentColor;
  d: path("M3 10V3h7v7zm0 11v-7h7v7zm11-11V3h7v7zm0 11v-7h7v7z");
}
</style><path class="kmj9aab0w"/>`,
		"fallback": "material-symbols-light:view-comfy-alt",
	});
}

export default Component;
