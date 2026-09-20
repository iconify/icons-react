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
		"content": `<style>.b0nyedkcd {
  fill: currentColor;
  d: path("M2.75 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-12 6a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="b0nyedkcd"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-20-filled",
	});
}

export default Component;
