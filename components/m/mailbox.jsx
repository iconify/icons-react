import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1_nb1b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m1_nb1b1i"/>`,
		"fallback": "reicon:mailbox",
	});
}

export default Component;
