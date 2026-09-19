import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te2afuoap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="te2afuoap"/>`,
		"fallback": "iconoir:keyframe-minus-in-solid",
	});
}

export default Component;
