import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u73_7tktp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u73_7tktp"/>`,
		"fallback": "ix:question-mark",
	});
}

export default Component;
