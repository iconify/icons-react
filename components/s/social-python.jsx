import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov02yvbiu.css';
import '../../css/w/w19t2zbtx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov02yvbiu"/><path class="w19t2zbtx"/>`,
		"fallback": "ion:social-python",
	});
}

export default Component;
