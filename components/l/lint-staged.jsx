import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i9j-kiphy.css';
import '../../css/d/d3f9n9b2a.css';
import '../../css/c/c5mqpjb8q.css';
import '../../css/b/b84xa49gy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="i9j-kiphy"/><path class="d3f9n9b2a"/><path class="c5mqpjb8q"/><path class="b84xa49gy"/></g>`,
		"fallback": "catppuccin:lint-staged",
	});
}

export default Component;
