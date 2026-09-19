import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeee4ly_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeee4ly_n"/>`,
		"fallback": "fe:italic",
	});
}

export default Component;
