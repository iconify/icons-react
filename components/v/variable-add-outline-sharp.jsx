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
		"content": `<style>.k6ev2xq7y {
  fill: currentColor;
  d: path("M14 16H4V8h16v2h-1V9H5v6h9zm-9-1V9zm14 4v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="k6ev2xq7y"/>`,
		"fallback": "material-symbols-light:variable-add-outline-sharp",
	});
}

export default Component;
