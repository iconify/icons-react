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
		"content": `<style>.jrx3upght {
  fill: currentColor;
  d: path("M3 16V8h3.346v8zm4.73 2V6h8.54v12zm9.924-2V8H21v8z");
}
</style><path class="jrx3upght"/>`,
		"fallback": "material-symbols-light:view-carousel-sharp",
	});
}

export default Component;
