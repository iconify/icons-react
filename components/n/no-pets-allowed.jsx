import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_cq0-cvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_cq0-cvy"/>`,
		"fallback": "guidance:no-pets-allowed",
	});
}

export default Component;
