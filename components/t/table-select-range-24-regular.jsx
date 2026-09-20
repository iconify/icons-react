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
		"content": `<style>.oh15gdqei {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zM10 19.5h4v-4h-4zm5.5 0h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4zm-11-1.75c0 .966.784 1.75 1.75 1.75H8.5v-4h-4zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25V14H14V4.5zM15.5 14h4v-4h-4zm0-5.5h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5z");
}
</style><path class="oh15gdqei"/>`,
		"fallback": "fluent:table-select-range-24-regular",
	});
}

export default Component;
