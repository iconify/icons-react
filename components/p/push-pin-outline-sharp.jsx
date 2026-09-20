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
		"content": `<style>.woaf_gbfa {
  fill: currentColor;
  d: path("m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1zm-7.15 2h6.3L14 12.85V5h-4v7.85zM12 14");
}
</style><path class="woaf_gbfa"/>`,
		"fallback": "material-symbols:push-pin-outline-sharp",
	});
}

export default Component;
