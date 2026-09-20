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
		"content": `<style>.u2v5mch-o {
  fill: currentColor;
  d: path("M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zM17 5v2h-4V3h2a2 2 0 0 1 2 2m-5-2v4H8V3.5a.5.5 0 0 1 .5-.5zm0 5H8v4h4zm5 4V8h-4v4zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5zm9 0v2a2 2 0 0 1-2 2h-2v-4z");
}
</style><path class="u2v5mch-o"/>`,
		"fallback": "fluent:table-stack-left-20-filled",
	});
}

export default Component;
