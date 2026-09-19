import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/j/jick4kgxj.css';
import '../../css/b/bxyjj4o7z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s53vmbcgz"><path class="jick4kgxj"/><path class="bxyjj4o7z"/></g>`,
		"fallback": "catppuccin:qwik",
	});
}

export default Component;
