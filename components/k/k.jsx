import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h40t94bbv.css';

const viewBox = {"width":456,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h40t94bbv"/>`,
		"fallback": "ls:k",
	});
}

export default Component;
