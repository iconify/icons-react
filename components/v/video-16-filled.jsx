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
		"content": `<style>.png88twva {
  fill: currentColor;
  d: path("M1 5.5A2.5 2.5 0 0 1 3.5 3h4A2.5 2.5 0 0 1 10 5.5v5A2.5 2.5 0 0 1 7.5 13h-4A2.5 2.5 0 0 1 1 10.5zm12.036 6.278L10.9 10.304q.02-.14.02-.283v-4.04q0-.144-.02-.283l2.136-1.474a1.25 1.25 0 0 1 1.96 1.028v5.498a1.25 1.25 0 0 1-1.96 1.028");
}
</style><path class="png88twva"/>`,
		"fallback": "fluent:video-16-filled",
	});
}

export default Component;
