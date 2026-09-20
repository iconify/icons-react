import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmtzif1hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmtzif1hb"/>`,
		"fallback": "thesvg-color:the-algorithms",
	});
}

export default Component;
