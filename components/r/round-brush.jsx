import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d37xtjbut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d37xtjbut"/>`,
		"fallback": "entypo:round-brush",
	});
}

export default Component;
