import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai8j3lypx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai8j3lypx"/>`,
		"fallback": "picon:microphone",
	});
}

export default Component;
