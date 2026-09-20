import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye0lxrj1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye0lxrj1f"/>`,
		"fallback": "uiw:up-circle",
	});
}

export default Component;
