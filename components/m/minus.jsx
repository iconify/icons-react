import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wglews2po.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wglews2po"/>`,
		"fallback": "ps:minus",
	});
}

export default Component;
