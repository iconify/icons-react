import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg1eb4bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg1eb4bcp"/>`,
		"fallback": "iconaut:loader-duo",
	});
}

export default Component;
