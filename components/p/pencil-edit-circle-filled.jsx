import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdtpq1bge.css';
import '../../css/l/l2x5o3qgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdtpq1bge"/><path class="l2x5o3qgt"/>`,
		"fallback": "boxicons:pencil-edit-circle-filled",
	});
}

export default Component;
