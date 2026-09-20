import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkkjs4bjp.css';
import '../../css/u/uwu_w82bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkkjs4bjp"/><path class="uwu_w82bn"/>`,
		"fallback": "token:swftc",
	});
}

export default Component;
