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
		"content": `<style>.u7e1occkl {
  fill: currentColor;
  d: path("M8.385 11.596h7.307v-1H8.385zm1 2.885h5.307v-1H9.385zM6 22V2h12.077v4.83H19v3.686h-.923V22z");
}
</style><path class="u7e1occkl"/>`,
		"fallback": "material-symbols-light:mobile-text-2-sharp",
	});
}

export default Component;
