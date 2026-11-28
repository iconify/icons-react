import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk7s-5bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wk7s-5bkf"/>`,
		"fallback": "iconaut:list-checks-duotone",
	});
}

export default Component;
