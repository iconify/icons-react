import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtcnayb_c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtcnayb_c"/>`,
		"fallback": "ep:takeaway-box",
	});
}

export default Component;
