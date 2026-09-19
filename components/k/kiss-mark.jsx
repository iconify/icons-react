import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1os19l5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1os19l5g"/>`,
		"fallback": "fluent-emoji-flat:kiss-mark",
	});
}

export default Component;
