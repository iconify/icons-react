import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgstyy1hw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgstyy1hw"/>`,
		"fallback": "codicon:terminal-powershell",
	});
}

export default Component;
