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
		"content": `<style>.i7-ympr0s {
  fill: currentColor;
  d: path("M19.5 20L14 14.5V12l8 8zM14 20v-3l3 3zM4 20V10H2l6-6l6 6h-2v10zm3-6h2v-4H7z");
}
</style><path class="i7-ympr0s"/>`,
		"fallback": "material-symbols:wb-shade-outline",
	});
}

export default Component;
