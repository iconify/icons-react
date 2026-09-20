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
		"content": `<style>.h8yusjz4t {
  fill: currentColor;
  d: path("M3 16V8h3.346v8zm4.73 2V6h8.54v12zm9.924-2V8H21v8zM8.73 17h6.538V7H8.731zM12 12");
}
</style><path class="h8yusjz4t"/>`,
		"fallback": "material-symbols-light:view-carousel-outline-sharp",
	});
}

export default Component;
