import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyfdd-46b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyfdd-46b"/>`,
		"fallback": "streamline:page-setting",
	});
}

export default Component;
