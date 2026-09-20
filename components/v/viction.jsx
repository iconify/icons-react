import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poh6isbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poh6isbvb"/>`,
		"fallback": "token:viction",
	});
}

export default Component;
