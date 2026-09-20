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
		"content": `<style>.qpy5ivb6f {
  fill: currentColor;
  d: path("M2 7.75A.75.75 0 0 1 2.75 7h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 2 7.75m4.5 0A.75.75 0 0 1 7.25 7h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m4.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75");
}
</style><path class="qpy5ivb6f"/>`,
		"fallback": "fluent:line-horizontal-1-dashes-16-filled",
	});
}

export default Component;
