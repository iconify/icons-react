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
		"content": `<style>.ysjq_vkpb {
  fill: currentColor;
  d: path("M3 11.5V5h18v6.5zM9.385 19v-6.5H21V19zM3 19v-6.5h5.385V19z");
}
</style><path class="ysjq_vkpb"/>`,
		"fallback": "material-symbols-light:view-comfy",
	});
}

export default Component;
