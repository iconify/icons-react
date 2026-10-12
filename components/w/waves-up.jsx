import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz97go0-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz97go0-n"/>`,
		"fallback": "andrsrxn:waves-up",
	});
}

export default Component;
