import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knz2nkbyb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="knz2nkbyb"/>`,
		"fallback": "ix:shield-check-filled",
	});
}

export default Component;
