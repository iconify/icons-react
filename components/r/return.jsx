import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0orgc37v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0orgc37v"/>`,
		"fallback": "grommet-icons:return",
	});
}

export default Component;
