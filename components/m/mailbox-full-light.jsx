import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9uy85bkb.css';
import '../../css/h/hw50cc_wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9uy85bkb"/><path class="hw50cc_wu"/>`,
		"fallback": "stash:mailbox-full-light",
	});
}

export default Component;
