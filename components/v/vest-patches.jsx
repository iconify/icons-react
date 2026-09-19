import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf7vyfbxm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf7vyfbxm"/>`,
		"fallback": "fa7-solid:vest-patches",
	});
}

export default Component;
