import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk5dgsb9j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk5dgsb9j"/>`,
		"fallback": "fa7-brands:medapps",
	});
}

export default Component;
