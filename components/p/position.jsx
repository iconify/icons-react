import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxoo1v3ca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxoo1v3ca"/>`,
		"fallback": "iconoir:position",
	});
}

export default Component;
