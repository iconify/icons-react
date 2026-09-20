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
		"content": `<style>.hhxghmy_n {
  fill: currentColor;
  d: path("M28 17a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3zM25.5 3A4.5 4.5 0 0 1 30 7.5v8.468a4.5 4.5 0 0 0-2-.468h-9a4.5 4.5 0 0 0-4.5 4.5v7h-8A4.5 4.5 0 0 1 2 22.5v-15A4.5 4.5 0 0 1 6.5 3z");
}
</style><path class="hhxghmy_n"/>`,
		"fallback": "fluent:picture-in-picture-32-filled",
	});
}

export default Component;
