import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rqu999qms {
  fill: currentColor;
  d: path("M3.5 1a.5.5 0 0 0-.5.5V9a2 2 0 0 0 2 2h1v2a2 2 0 1 0 4 0v-2h1a2 2 0 0 0 2-2V1.5a.5.5 0 0 0-.5-.5zM4 7V2h4v1.5a.5.5 0 0 0 1 0V2h1v2.5a.5.5 0 0 0 1 0V2h1v5zm0 1h8v1a1 1 0 0 1-1 1H9.5a.5.5 0 0 0-.5.5V13a1 1 0 1 1-2 0v-2.5a.5.5 0 0 0-.5-.5H5a1 1 0 0 1-1-1z");
}
</style><path class="rqu999qms"/>`,
		"fallback": "fluent:paint-brush-16-regular",
	});
}

export default Component;
