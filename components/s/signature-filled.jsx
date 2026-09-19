import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js3jstb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js3jstb1v"/>`,
		"fallback": "boxicons:signature-filled",
	});
}

export default Component;
