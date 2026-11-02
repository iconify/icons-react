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
		"content": `<style>.u3vv4_k8o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a1 1 0 0 1 .781 1.625a5.4 5.4 0 0 0 .844 7.594a5.4 5.4 0 0 0 6.75 0A1 1 0 0 1 22 12");
}
</style><path class="u3vv4_k8o"/>`,
		"fallback": "coolicons:moon-bulk",
	});
}

export default Component;
