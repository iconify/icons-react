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
		"content": `<style>.c5kr0xb4n {
  fill: currentColor;
  d: path("M15 1a4 4 0 0 1 4 4v.5a.5.5 0 0 1-1 0V5a3 3 0 1 0-6 0v2h1.5A2.5 2.5 0 0 1 16 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-6A2.5 2.5 0 0 1 6.5 7H11V5a4 4 0 0 1 4-4m-5 10.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}
</style><path class="c5kr0xb4n"/>`,
		"fallback": "fluent:lock-open-20-filled",
	});
}

export default Component;
