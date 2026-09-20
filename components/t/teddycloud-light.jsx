import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imkf5vvcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imkf5vvcy"/>`,
		"fallback": "selfhst:teddycloud-light",
	});
}

export default Component;
