import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru7yyeoqt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru7yyeoqt"/>`,
		"fallback": "fad:ram",
	});
}

export default Component;
