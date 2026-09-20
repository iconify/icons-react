import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw05iib2q.css';
import '../../css/n/n8h410f2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw05iib2q"/><path clip-rule="evenodd" class="n8h410f2u"/>`,
		"fallback": "token:paribu",
	});
}

export default Component;
