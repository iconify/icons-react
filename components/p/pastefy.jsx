import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8z18xbtt.css';
import '../../css/j/j1680wbis.css';
import '../../css/a/aavykeq3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8z18xbtt"/><path class="j1680wbis"/><path class="aavykeq3q"/>`,
		"fallback": "selfhst:pastefy",
	});
}

export default Component;
