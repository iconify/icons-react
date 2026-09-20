import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p3ltzccig {
  fill: currentColor;
  d: path("M4 16.25A6.25 6.25 0 0 1 10.25 10h27.5A6.25 6.25 0 0 1 44 16.25v15.5A6.25 6.25 0 0 1 37.75 38h-27.5A6.25 6.25 0 0 1 4 31.75zm8.134 4.116a1.25 1.25 0 0 0-1.768 1.768L12.232 24l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L14 25.768l1.866 1.866a1.25 1.25 0 0 0 1.768-1.768L15.768 24l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L14 22.232zm9.232 0a1.25 1.25 0 0 0 0 1.768L23.232 24l-1.866 1.866a1.25 1.25 0 0 0 1.768 1.768L25 25.768l1.866 1.866a1.25 1.25 0 0 0 1.768-1.768L26.768 24l1.866-1.866a1.25 1.25 0 0 0-1.768-1.768L25 22.232l-1.866-1.866a1.25 1.25 0 0 0-1.768 0M33.25 25.5a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="p3ltzccig"/>`,
		"fallback": "fluent:password-48-filled",
	});
}

export default Component;
