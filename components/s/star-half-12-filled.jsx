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
		"content": `<style>.yjvaxu6yp {
  fill: currentColor;
  d: path("M6 1.1a.79.79 0 0 0-.717.446L4.172 3.798l-2.486.361a.8.8 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0 1.16.844L6 9.428z");
}
</style><path class="yjvaxu6yp"/>`,
		"fallback": "fluent:star-half-12-filled",
	});
}

export default Component;
