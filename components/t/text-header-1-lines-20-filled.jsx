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
		"content": `<style>.lf96sdbuz {
  fill: currentColor;
  d: path("M10 8.25c0 .41.34.75.75.75s.75-.34.75-.75v-5.5c0-.35-.24-.65-.58-.73a.734.734 0 0 0-.84.39c-.38.75-1.15 1.17-1.17 1.17c-.37.18-.51.63-.33 1c.19.38.64.53 1.01.34c.04-.02.2-.1.41-.25zM2.75 2a.75.75 0 0 1 .75.75v2h2V2.751a.75.75 0 1 1 1.5 0v5.495a.75.75 0 0 1-1.5 0V6.25h-2v2a.75.75 0 0 1-1.5 0v-5.5A.75.75 0 0 1 2.75 2M2 16.248a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75m.75-4.748a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="lf96sdbuz"/>`,
		"fallback": "fluent:text-header-1-lines-20-filled",
	});
}

export default Component;
