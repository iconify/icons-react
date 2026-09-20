import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbjjubn9a.css';

const viewBox = {"width":24,"height":24,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbjjubn9a"/>`,
		"fallback": "jam:tools",
	});
}

export default Component;
