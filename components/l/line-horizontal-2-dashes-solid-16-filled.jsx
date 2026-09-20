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
		"content": `<style>.n_c4z7bkj {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm-9 5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="n_c4z7bkj"/>`,
		"fallback": "fluent:line-horizontal-2-dashes-solid-16-filled",
	});
}

export default Component;
