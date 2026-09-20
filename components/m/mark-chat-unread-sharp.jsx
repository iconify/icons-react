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
		"content": `<style>.oxxiftbjx {
  fill: currentColor;
  d: path("M17.23 5.733q-.73-.728-.73-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732t-1.771-.729M3 20.077V3h11.6q-.061.25-.071.49t-.006.51q.08 1.956 1.379 3.209Q17.2 8.46 19 8.46q.512 0 1.027-.125T21 7.961V17H6.077z");
}
</style><path class="oxxiftbjx"/>`,
		"fallback": "material-symbols-light:mark-chat-unread-sharp",
	});
}

export default Component;
