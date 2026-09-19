import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxx0zybpe.css';

const viewBox = {"width":666,"height":681};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxx0zybpe"/>`,
		"fallback": "ls:underline",
	});
}

export default Component;
