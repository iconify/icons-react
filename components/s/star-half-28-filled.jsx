import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n9l5u3bmz {
  fill: currentColor;
  d: path("M14 3.1c-.517 0-1.033.27-1.299.808l-2.69 5.452l-6.018.875c-1.19.173-1.664 1.634-.804 2.473l4.355 4.244l-1.028 5.993c-.203 1.185 1.04 2.088 2.104 1.529L14 21.645z");
}
</style><path class="n9l5u3bmz"/>`,
		"fallback": "fluent:star-half-28-filled",
	});
}

export default Component;
