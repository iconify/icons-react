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
		"content": `<style>.t8f5qkbzl {
  fill: currentColor;
  d: path("m12 10.577l-3.308 3.308l.708.707l2.1-2.1v4.7h1v-4.7l2.1 2.1l.708-.707zm-7-2.77V19h14V7.808zM4 20V6.916L6.416 4h11.15L20 6.954V20zM5.38 6.808H18.6L17.096 5H6.885zM12 13.404");
}
</style><path class="t8f5qkbzl"/>`,
		"fallback": "material-symbols-light:unarchive-outline-sharp",
	});
}

export default Component;
