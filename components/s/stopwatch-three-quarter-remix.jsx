import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qidbiubrb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qidbiubrb"/>`,
		"fallback": "streamline-flex:stopwatch-three-quarter-remix",
	});
}

export default Component;
