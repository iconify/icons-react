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
		"content": `<style>.t1pk5zb5q {
  fill: currentColor;
  d: path("M3.5 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1zm12.85 10.808l-2.858-2.858l.708-.708l2.15 2.139l4.25-4.25l.708.719z");
}
</style><path class="t1pk5zb5q"/>`,
		"fallback": "material-symbols-light:playlist-add-check",
	});
}

export default Component;
