import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tshdjxb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tshdjxb9r"/>`,
		"fallback": "cbi:tp-link-tapo",
	});
}

export default Component;
