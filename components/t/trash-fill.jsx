import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfv6q6btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfv6q6btr"/>`,
		"fallback": "eva:trash-fill",
	});
}

export default Component;
