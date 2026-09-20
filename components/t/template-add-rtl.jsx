import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjz52tsns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjz52tsns"/>`,
		"fallback": "ooui:template-add-rtl",
	});
}

export default Component;
