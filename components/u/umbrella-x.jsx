import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w400v9b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w400v9b0b"/>`,
		"fallback": "noviair-light:umbrella-x",
	});
}

export default Component;
