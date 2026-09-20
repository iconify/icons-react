import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8wimbbj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx8wimbbj"/>`,
		"fallback": "picon:rightward",
	});
}

export default Component;
