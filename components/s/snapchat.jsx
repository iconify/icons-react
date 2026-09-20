import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylwx14bgz.css';
import '../../css/w/w3xbe3b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylwx14bgz"/><path class="w3xbe3b2s"/>`,
		"fallback": "mage:snapchat",
	});
}

export default Component;
