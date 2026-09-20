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
		"content": `<style>.i_4-sljut {
  fill: currentColor;
  d: path("M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h2.707a5.5 5.5 0 0 1-.185-1H3.5A1.5 1.5 0 0 1 2 10.5v-7A1.5 1.5 0 0 1 3.5 2h7A1.5 1.5 0 0 1 12 3.5v2.522q.516.048 1 .185V3.5A2.5 2.5 0 0 0 10.5 1zm4.837 6H5.25c-.69 0-1.288.565-1.17 1.246c.158.913.628 1.886 2.027 2.17A5.5 5.5 0 0 1 8.337 7M8.5 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12z");
}
</style><path class="i_4-sljut"/>`,
		"fallback": "fluent:person-square-add-16-regular",
	});
}

export default Component;
