import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugv8qvw0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugv8qvw0y"/>`,
		"fallback": "iconoir:orange-slice-alt",
	});
}

export default Component;
