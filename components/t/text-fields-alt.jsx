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
		"content": `<style>.r3m-8ij2x {
  fill: currentColor;
  d: path("M2 20.23V19h20v1.23zM19 17V4h.885v13zM4.73 17l5.29-13h.96l5.29 13h-1.21l-1.442-3.62H7.335L5.862 17zm2.978-4.6h5.527l-2.743-6.8h-.023z");
}
</style><path class="r3m-8ij2x"/>`,
		"fallback": "material-symbols-light:text-fields-alt",
	});
}

export default Component;
