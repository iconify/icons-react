import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf7qcpbiy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf7qcpbiy"/>`,
		"fallback": "dinkie-icons:otfeature-vert-small-filled",
	});
}

export default Component;
