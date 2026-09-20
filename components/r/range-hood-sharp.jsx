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
		"content": `<style>.cuhbyg6-n {
  fill: currentColor;
  d: path("M3.55 12.885L8 8.423V4h8v4.423l4.462 4.462zM3 19v-5.115h18V19zm7-2.608h4v-.884h-4z");
}
</style><path class="cuhbyg6-n"/>`,
		"fallback": "material-symbols-light:range-hood-sharp",
	});
}

export default Component;
