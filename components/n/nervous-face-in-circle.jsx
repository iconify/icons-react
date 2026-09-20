import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcn09ub7j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcn09ub7j"/>`,
		"fallback": "pinhead:nervous-face-in-circle",
	});
}

export default Component;
