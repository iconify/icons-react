import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2_d-n7q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2_d-n7q"/>`,
		"fallback": "cryptocurrency:ndz",
	});
}

export default Component;
