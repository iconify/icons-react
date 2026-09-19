import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmjq4kbvx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmjq4kbvx"/>`,
		"fallback": "codicon:terminal-secure",
	});
}

export default Component;
