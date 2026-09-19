import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxt6upcmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxt6upcmd"/>`,
		"fallback": "griddy-icons:sailboat",
	});
}

export default Component;
