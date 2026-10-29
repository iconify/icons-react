import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utqzt6bcp.css';
import '../../css/u/ubxtf-bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utqzt6bcp wm-k"/><path class="ubxtf-bat wm-a"/>`,
		"fallback": "withicons-bauhaus:smile",
	});
}

export default Component;
