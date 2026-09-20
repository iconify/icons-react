import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pktdf7e1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pktdf7e1i"/>`,
		"fallback": "token:rose",
	});
}

export default Component;
