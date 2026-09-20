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
		"content": `<style>.gxz_g4lxm {
  fill: currentColor;
  d: path("M2 21v-2h20v2zm17-4V3h1.5v14zM4 17L9.25 3h2.5L17 17h-2.4l-1.25-3.6H7.7L6.4 17zm4.4-5.6h4.2l-2.05-5.8h-.1z");
}
</style><path class="gxz_g4lxm"/>`,
		"fallback": "material-symbols:text-fields-alt-outline",
	});
}

export default Component;
