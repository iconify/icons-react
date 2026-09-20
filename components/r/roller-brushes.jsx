import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5iyztbef.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5iyztbef"/>`,
		"fallback": "pinhead:roller-brushes",
	});
}

export default Component;
