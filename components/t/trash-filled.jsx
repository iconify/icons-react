import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eu23habtd.css';
import '../../css/n/nqyidnbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eu23habtd"/><path class="nqyidnbyv"/></g>`,
		"fallback": "bitcoin-icons:trash-filled",
	});
}

export default Component;
