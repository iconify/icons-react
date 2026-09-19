import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1spidcpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1spidcpk"/>`,
		"fallback": "cbi:stagel-light-2-group",
	});
}

export default Component;
