import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thruo1biv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thruo1biv"/>`,
		"fallback": "uiw:paper-clip",
	});
}

export default Component;
