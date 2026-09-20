import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mqc5ysb8a {
  fill: var(--svg-color--e75a70, #e75a70);
  d: path("M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639z");
}
</style><path class="mqc5ysb8a"/>`,
		"fallback": "twemoji:red-triangle-pointed-down",
	});
}

export default Component;
