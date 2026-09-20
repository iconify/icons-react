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
		"content": `<style>.ygtssqlkg {
  fill: currentColor;
  d: path("m17.35 19.289l-2.813-2.839l.688-.688l2.125 2.125l4.25-4.25l.688.713zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616V11.5h-8.5V17H6.077z");
}
</style><path class="ygtssqlkg"/>`,
		"fallback": "material-symbols-light:mark-chat-read",
	});
}

export default Component;
