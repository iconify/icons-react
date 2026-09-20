import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6r127bgj.css';
import '../../css/z/zta7gebwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6r127bgj"/><path class="zta7gebwo"/>`,
		"fallback": "streamline-freehand:messages-bubble-square-text",
	});
}

export default Component;
