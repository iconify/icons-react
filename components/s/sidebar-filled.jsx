import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3m2r0nxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3m2r0nxw"/>`,
		"fallback": "griddy-icons:sidebar-filled",
	});
}

export default Component;
