import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krb-eh9nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krb-eh9nj"/>`,
		"fallback": "ix:square-filled",
	});
}

export default Component;
