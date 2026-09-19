import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9lz5abtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9lz5abtd"/>`,
		"fallback": "iconoir:vertical-merge",
	});
}

export default Component;
