import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1kx2epvq.css';
import '../../css/v/vyh9iac7o.css';
import '../../css/d/d5jhbmbzf.css';
import '../../css/u/u6iipyb0r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w1kx2epvq"/><path class="vyh9iac7o"/><path class="d5jhbmbzf"/><path class="u6iipyb0r"/></g>`,
		"fallback": "bi:music-note-list",
	});
}

export default Component;
