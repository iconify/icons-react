import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2qt-w.css';
import '../../css/w/wtwpul.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-66.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2qt-w"/><path class="wtwpul"/>`,
		"fallback": "line-md:star-alt-filled-right-half",
	});
}

export default Component;
