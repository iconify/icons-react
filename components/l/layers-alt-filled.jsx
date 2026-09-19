import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1ze04blp.css';
import '../../css/d/doshyacby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1ze04blp"/><path class="doshyacby"/>`,
		"fallback": "boxicons:layers-alt-filled",
	});
}

export default Component;
