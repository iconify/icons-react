import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.egp78c4hs {
  fill: currentColor;
  d: path("M15.317 2.051a1 1 0 0 1 .632 1.265l-6 18a1 1 0 1 1-1.897-.632l6-18a1 1 0 0 1 1.265-.633");
}
</style><path class="egp78c4hs"/>`,
		"fallback": "fluent:slash-forward-24-filled",
	});
}

export default Component;
