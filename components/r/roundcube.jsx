import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbqtq-4ae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbqtq-4ae"/>`,
		"fallback": "thesvg-color:roundcube",
	});
}

export default Component;
