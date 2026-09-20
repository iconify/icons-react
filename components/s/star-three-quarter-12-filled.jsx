import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g8qx9cajp {
  fill: currentColor;
  d: path("m7 2.116l-.282-.57a.8.8 0 0 0-1.435 0L4.172 3.798l-2.486.361a.8.8 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0 1.16.844l2.224-1.17l.999.526z");
}
</style><path class="g8qx9cajp"/>`,
		"fallback": "fluent:star-three-quarter-12-filled",
	});
}

export default Component;
