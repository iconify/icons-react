import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4lnfkov.css';

const viewBox = {"width":431,"height":772};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu4lnfkov"/>`,
		"fallback": "ls:s-upper-case",
	});
}

export default Component;
