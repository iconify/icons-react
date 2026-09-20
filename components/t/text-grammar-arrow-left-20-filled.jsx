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
		"content": `<style>.nswbwhf1q {
  fill: currentColor;
  d: path("M17.25 5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0 3a.75.75 0 0 1 0 1.5h-.456A5.5 5.5 0 0 0 14.5 9a5.5 5.5 0 0 0-2.294.5H2.75a.75.75 0 0 1 0-1.5zm-14.5 7.5h6.34a5.5 5.5 0 0 1-.068-1.5H2.75a.75.75 0 0 0 0 1.5m0-3h6.625a5.5 5.5 0 0 1 .882-1.5H2.75a.75.75 0 0 0 0 1.5m7.25 2a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m4.146-2.354a.5.5 0 0 1 .708.708L13.707 14H16.5a.5.5 0 0 1 0 1h-2.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1-.146-.351v-.006a.5.5 0 0 1 .144-.348l.003-.003z");
}
</style><path class="nswbwhf1q"/>`,
		"fallback": "fluent:text-grammar-arrow-left-20-filled",
	});
}

export default Component;
