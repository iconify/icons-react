import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2_f_obtj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2_f_obtj"/>`,
		"fallback": "whh:squarestop",
	});
}

export default Component;
