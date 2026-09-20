import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdjsuka3q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdjsuka3q"/>`,
		"fallback": "temaki:storage-fermenter",
	});
}

export default Component;
