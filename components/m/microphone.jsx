import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnqn87_3k.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnqn87_3k"/>`,
		"fallback": "vs:microphone",
	});
}

export default Component;
