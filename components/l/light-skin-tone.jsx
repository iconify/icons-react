import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9_cmhbvy.css';
import '../../css/y/yu8tkqs3l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9_cmhbvy"/><path class="yu8tkqs3l"/>`,
		"fallback": "openmoji:light-skin-tone",
	});
}

export default Component;
