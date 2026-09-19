import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi-0u1b-k.css';
import '../../css/f/fdsk41g4v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi-0u1b-k"/><path class="fdsk41g4v"/>`,
		"fallback": "ant-design:thunderbolt-twotone",
	});
}

export default Component;
