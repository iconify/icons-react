import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yybd16bsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yybd16bsd"/>`,
		"fallback": "ix:panel-ipc-fail",
	});
}

export default Component;
