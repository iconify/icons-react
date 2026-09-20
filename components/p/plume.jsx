import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmneijx0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmneijx0r"/>`,
		"fallback": "token:plume",
	});
}

export default Component;
