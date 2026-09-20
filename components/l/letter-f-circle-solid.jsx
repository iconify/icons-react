import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdnzs0byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdnzs0byg"/>`,
		"fallback": "mynaui:letter-f-circle-solid",
	});
}

export default Component;
