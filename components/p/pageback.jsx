import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnv4d03jt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnv4d03jt"/>`,
		"fallback": "whh:pageback",
	});
}

export default Component;
