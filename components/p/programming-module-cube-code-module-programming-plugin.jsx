import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejpxn4brd.css';
import '../../css/y/yyj2mtbvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejpxn4brd"/><path class="yyj2mtbvg"/>`,
		"fallback": "streamline:programming-module-cube-code-module-programming-plugin",
	});
}

export default Component;
