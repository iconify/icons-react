import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsxk-l3nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsxk-l3nq"/>`,
		"fallback": "iconaut:moon-solid",
	});
}

export default Component;
