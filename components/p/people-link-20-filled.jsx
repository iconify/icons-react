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
		"content": `<style>.oxwx82hkl {
  fill: currentColor;
  d: path("M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5M17 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-8 6a3.5 3.5 0 0 1 1.05-2.5H3.5a2 2 0 0 0-2 2s0 4 5.25 4c1.574 0 2.677-.36 3.448-.863A3.5 3.5 0 0 1 9 13.5m3.5-2.5a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="oxwx82hkl"/>`,
		"fallback": "fluent:people-link-20-filled",
	});
}

export default Component;
