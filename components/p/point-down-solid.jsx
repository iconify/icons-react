import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq2ums2ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq2ums2ju"/>`,
		"fallback": "iconaut:point-down-solid",
	});
}

export default Component;
