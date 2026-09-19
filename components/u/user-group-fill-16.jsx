import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pghkohbzn.css';
import '../../css/f/f8-p491gh.css';
import '../../css/k/kbd990bxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="pghkohbzn"/><circle class="f8-p491gh"/><path class="kbd990bxg"/></g>`,
		"fallback": "garden:user-group-fill-16",
	});
}

export default Component;
