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
		"content": `<style>.mujj5mbvo {
  fill: currentColor;
  d: path("m6.4 20l-.688-.688l4.69-4.697q.633-.632.865-1.165t.233-1.429V5.883L9.38 7.996l-.688-.688L12 4l3.308 3.308l-.689.688L12.5 5.883v6.138q0 .896.252 1.448t.885 1.185l4.652 4.658L17.6 20L12 14.4z");
}
</style><path class="mujj5mbvo"/>`,
		"fallback": "material-symbols-light:merge-outline",
	});
}

export default Component;
