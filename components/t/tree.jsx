import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_j702gio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_j702gio"/>`,
		"fallback": "grommet-icons:tree",
	});
}

export default Component;
