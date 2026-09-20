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
		"content": `<style>.bdivbcu1b {
  fill: currentColor;
  d: path("M3 9.5V5h18v4.5h-1V6H4v3.5zM3 19v-4.5h1V18h16v-3.5h1V19zm4.683-6.5l1.911 3.804h.812L14 9.134l1.683 3.366H21v-1h-4.683l-1.911-3.804h-.812L10 14.866L8.317 11.5H3v1zM12 12");
}
</style><path class="bdivbcu1b"/>`,
		"fallback": "material-symbols-light:monitor-heart-outline-sharp",
	});
}

export default Component;
