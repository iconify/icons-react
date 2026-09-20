import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax4al5w4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax4al5w4i"/>`,
		"fallback": "streamline-ultimate:meeting-remote-bold",
	});
}

export default Component;
