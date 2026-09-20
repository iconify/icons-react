import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b7u2nhbkc {
  fill: currentColor;
  d: path("M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3-.001zm13 0v9a1.5 1.5 0 0 0 3 0v-9a1.5 1.5 0 0 0-3 0M14 14V6H6v8z");
}
</style><path class="b7u2nhbkc"/>`,
		"fallback": "fluent:pipeline-20-filled",
	});
}

export default Component;
