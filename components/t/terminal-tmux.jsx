import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7nqglb-x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7nqglb-x"/>`,
		"fallback": "codicon:terminal-tmux",
	});
}

export default Component;
