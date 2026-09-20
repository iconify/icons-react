import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yybedubjy.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yybedubjy"/>`,
		"fallback": "thesvg-color:sanity-light",
	});
}

export default Component;
