import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0-ge9aao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0-ge9aao"/>`,
		"fallback": "ooui:sandbox",
	});
}

export default Component;
