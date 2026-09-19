import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwoqtve7l.css';

const viewBox = {"width":1408,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwoqtve7l"/>`,
		"fallback": "fa:paperclip",
	});
}

export default Component;
