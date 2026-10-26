import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxeetebtu.css';

const viewBox = {"width":240,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxeetebtu"/>`,
		"fallback": "thesvg-color:n8n-light",
	});
}

export default Component;
