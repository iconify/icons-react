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
		"content": `<style>.ekbtj6fun {
  fill: currentColor;
  d: path("M17.462 20H7.654V9l6.269-6.192l.443.442q.136.136.23.35t.092.392v.158L13.667 9h6.719q.627 0 1.12.494T22 10.616v1.23q0 .137-.028.298q-.028.162-.083.298l-2.731 6.474q-.206.461-.693.773q-.486.311-1.003.311M6.654 9v11H3V9z");
}
</style><path class="ekbtj6fun"/>`,
		"fallback": "material-symbols-light:thumb-up",
	});
}

export default Component;
