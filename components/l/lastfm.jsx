import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyv4gxb0a.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyv4gxb0a"/>`,
		"fallback": "whh:lastfm",
	});
}

export default Component;
