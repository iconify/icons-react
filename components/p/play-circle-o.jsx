import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ud-2ngi.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ud-2ngi"/>`,
		"fallback": "fa:play-circle-o",
	});
}

export default Component;
