import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc7pk4nsr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc7pk4nsr"/>`,
		"fallback": "pinhead:three-chevrons-right",
	});
}

export default Component;
