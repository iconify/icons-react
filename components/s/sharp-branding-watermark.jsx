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
		"content": `<style>.z_pw6tbco {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 16h-9v-6h9z");
}
</style><path class="z_pw6tbco"/>`,
		"fallback": "ic:sharp-branding-watermark",
	});
}

export default Component;
