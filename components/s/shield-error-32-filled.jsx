import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a-ljd7z_b {
  fill: currentColor;
  d: path("M15.445 2.168a1 1 0 0 1 1.11 0c2.916 1.944 6.76 3.858 11.545 4.337a1 1 0 0 1 .9.995V16c0 3.88-2.124 7.169-4.701 9.546c-2.572 2.372-5.736 3.971-8.114 4.417l-.185.034l-.185-.034c-2.377-.446-5.542-2.045-8.114-4.417C5.124 23.169 3 19.88 3 16V7.5a1 1 0 0 1 .9-.995c4.785-.479 8.63-2.393 11.545-4.337M16 21.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 8a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1");
}
</style><path class="a-ljd7z_b"/>`,
		"fallback": "fluent:shield-error-32-filled",
	});
}

export default Component;
