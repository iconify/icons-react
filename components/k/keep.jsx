import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5n0-rb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5n0-rb2v"/>`,
		"fallback": "token:keep",
	});
}

export default Component;
