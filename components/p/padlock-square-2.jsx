import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inpjly4dy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inpjly4dy"/>`,
		"fallback": "streamline-flex:padlock-square-2",
	});
}

export default Component;
