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
		"content": `<style>.vcx4sbows {
  fill: currentColor;
  d: path("M7.192 8.808h1.616V7.192H7.192zm0 4h1.616v-1.616H7.192zm0 4h1.616v-1.616H7.192zM4 20V4h11.577L20 8.423V20zm1-1h14V9h-4V5H5zM5 5v4zv14z");
}
</style><path class="vcx4sbows"/>`,
		"fallback": "material-symbols-light:summarize-outline-sharp",
	});
}

export default Component;
