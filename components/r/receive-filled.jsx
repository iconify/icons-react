import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/ss5dusoxj.css';
import '../../css/e/evhjz680v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ss5dusoxj"/><path class="evhjz680v"/></g>`,
		"fallback": "bitcoin-icons:receive-filled",
	});
}

export default Component;
