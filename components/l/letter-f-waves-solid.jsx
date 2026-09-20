import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze2r_i9qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze2r_i9qx"/>`,
		"fallback": "mynaui:letter-f-waves-solid",
	});
}

export default Component;
