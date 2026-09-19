import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idwstqb7m.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idwstqb7m"/>`,
		"fallback": "ps:mail-back",
	});
}

export default Component;
