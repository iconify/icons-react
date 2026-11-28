import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsn_sqeph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsn_sqeph"/>`,
		"fallback": "iconaut:theater-mask-solid",
	});
}

export default Component;
