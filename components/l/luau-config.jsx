import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/p/pqnoonb8e.css';
import '../../css/o/obz7f--ig.css';
import '../../css/g/gu7swvc7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s53vmbcgz"><path class="pqnoonb8e"/><path class="obz7f--ig"/><path class="gu7swvc7j"/></g>`,
		"fallback": "catppuccin:luau-config",
	});
}

export default Component;
