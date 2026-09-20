import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.js34045fi {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM16.5 28h8a3.5 3.5 0 0 0 3.5-3.5v-8H16.5zm-1-11.5H4v8A3.5 3.5 0 0 0 7.5 28h8zm1-1H28v-8A3.5 3.5 0 0 0 24.5 4h-8zM15.5 4h-8A3.5 3.5 0 0 0 4 7.5v8h11.5z");
}
</style><path class="js34045fi"/>`,
		"fallback": "fluent:table-simple-32-light",
	});
}

export default Component;
