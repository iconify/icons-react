import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoyo56b2a.css';
import '../../css/o/ogduviblr.css';
import '../../css/b/bx9w9rkcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoyo56b2a"/><path class="ogduviblr"/><path class="bx9w9rkcc"/>`,
		"fallback": "token:mrs",
	});
}

export default Component;
