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
		"content": `<style>.ju5pjsb5y {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14zm12 0h-7.5l2-2H18z");
}
</style><path class="ju5pjsb5y"/>`,
		"fallback": "ic:sharp-rate-review",
	});
}

export default Component;
