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
		"content": `<style>.eoywprgsh {
  fill: currentColor;
  d: path("m11.4 12.789l2.1-2.1l2.1 2.1l.688-.689l-2.1-2.1l2.1-2.1l-.688-.689l-2.1 2.1l-2.1-2.1l-.688.689l2.1 2.1l-2.1 2.1zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.691 0-1.153-.462T3.5 18.385V6.615h1v11.77q0 .23.192.423t.423.192h11.77v1z");
}
</style><path class="eoywprgsh"/>`,
		"fallback": "material-symbols-light:tab-close",
	});
}

export default Component;
