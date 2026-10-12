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
		"content": `<style>.w_y7iedua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 6q.78 5.72 6.5 6.5q-5.72.78-6.5 6.5q-.78-5.72-6.5-6.5q5.72-.78 6.5-6.5ZM5.75 3l.33 2.42l2.42.33l-2.42.33l-.33 2.42l-.33-2.42L3 5.75l2.42-.33zm12.5 12.5l.33 2.42l2.42.33l-2.42.33l-.33 2.42l-.33-2.42l-2.42-.33l2.42-.33z");
}
</style><path class="w_y7iedua"/>`,
		"fallback": "iconoven:sparkle-sharp",
	});
}

export default Component;
