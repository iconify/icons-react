import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmlr14bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmlr14bkd"/>`,
		"fallback": "iconaut:shield-user-solid",
	});
}

export default Component;
