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
		"content": `<style>.o6t66obhw {
  d: path("M10 2a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a3 3 0 0 1 3-3zm4 5H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2zM10 3a2 2 0 0 0-2 2v1h4V5a2 2 0 0 0-2-2z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="o6t66obhw"/>`,
		"fallback": "fluent:lock-20-regular",
	});
}

export default Component;
