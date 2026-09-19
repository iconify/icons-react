import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj3gltbbh.css';
import '../../css/g/gvjt3ybox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj3gltbbh"/><path class="gvjt3ybox"/>`,
		"fallback": "famicons:logo-wechat",
	});
}

export default Component;
