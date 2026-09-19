import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vsi3qbcau.css';
import '../../css/o/oioylhh8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vsi3qbcau"/><path class="oioylhh8q"/></g>`,
		"fallback": "bitcoin-icons:wallet-filled",
	});
}

export default Component;
