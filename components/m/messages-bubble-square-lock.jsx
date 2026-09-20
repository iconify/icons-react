import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6r127bgj.css';
import '../../css/e/e7r56mbuj.css';
import '../../css/q/qs_8itbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6r127bgj"/><path class="e7r56mbuj"/><path class="qs_8itbyi"/>`,
		"fallback": "streamline-freehand:messages-bubble-square-lock",
	});
}

export default Component;
