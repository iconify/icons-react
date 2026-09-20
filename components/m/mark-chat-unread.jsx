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
		"content": `<style>.zjgj2v_zi {
  fill: currentColor;
  d: path("M17.23 5.73Q16.5 5 16.5 3.963t.73-1.77t1.77-.73t1.77.73t.73 1.77t-.73 1.769t-1.77.73t-1.77-.73M3 20.077V4.616q0-.691.463-1.153T4.615 3H14.6q-.061.25-.071.49t-.006.51q.08 1.846 1.36 3.154Q17.162 8.462 19 8.462q.512 0 1.027-.125T21 7.962v7.423q0 .69-.462 1.153T19.385 17H6.077z");
}
</style><path class="zjgj2v_zi"/>`,
		"fallback": "material-symbols-light:mark-chat-unread",
	});
}

export default Component;
