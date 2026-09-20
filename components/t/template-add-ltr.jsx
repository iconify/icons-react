import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moqj_8bur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moqj_8bur"/>`,
		"fallback": "ooui:template-add-ltr",
	});
}

export default Component;
