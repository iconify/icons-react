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
		"content": `<style>.ux4gmjbhx {
  fill: currentColor;
  d: path("M19.75 2.5a1.75 1.75 0 0 1 1.75 1.75v5.462a2.73 2.73 0 0 1-.8 1.944l-.334.335A3.5 3.5 0 0 0 14 14v.049a2.5 2.5 0 0 0-2 2.45v3.837a2.753 2.753 0 0 1-3.69-.181l-4.468-4.451a2.75 2.75 0 0 1 0-3.888l8.5-8.51a2.73 2.73 0 0 1 1.943-.807z");
}
</style><path class="ux4gmjbhx"/>`,
		"fallback": "fluent:tag-lock-accent-24-filled",
	});
}

export default Component;
