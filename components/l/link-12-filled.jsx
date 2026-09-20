import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d5kw8bb3j {
  fill: currentColor;
  d: path("M1.5 5.2a2.7 2.7 0 0 1 2.7-2.7h.05a.75.75 0 0 1 0 1.5H4.2A1.2 1.2 0 0 0 3 5.2v.6A1.2 1.2 0 0 0 4.2 7h.05a.75.75 0 0 1 0 1.5H4.2a2.7 2.7 0 0 1-2.7-2.7zm9 0a2.7 2.7 0 0 0-2.7-2.7h-.05a.75.75 0 0 0 0 1.5h.05A1.2 1.2 0 0 1 9 5.2v.6A1.2 1.2 0 0 1 7.8 7h-.05a.75.75 0 0 0 0 1.5h.05a2.7 2.7 0 0 0 2.7-2.7zm-5.75-.45a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="d5kw8bb3j"/>`,
		"fallback": "fluent:link-12-filled",
	});
}

export default Component;
