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
		"content": `<style>.e-efj7chr {
  fill: currentColor;
  d: path("M4 20V4h15.606l-1 1H5v14h14v-7.361l1-1V20zm7.525-3.712l-4.554-4.553l.708-.708l3.865 3.865l8.79-8.79l.695.683z");
}
</style><path class="e-efj7chr"/>`,
		"fallback": "material-symbols-light:select-check-box-sharp",
	});
}

export default Component;
