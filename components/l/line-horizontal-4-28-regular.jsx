import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mab27ccjp {
  fill: currentColor;
  d: path("M25.251 22a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 1 1 0-1.5z");
}
</style><path class="mab27ccjp"/>`,
		"fallback": "fluent:line-horizontal-4-28-regular",
	});
}

export default Component;
