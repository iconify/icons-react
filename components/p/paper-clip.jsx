import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7612qess.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7612qess"/>`,
		"fallback": "el:paper-clip",
	});
}

export default Component;
