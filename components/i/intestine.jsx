import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eztqw9biy.css';
import '../../css/l/l12gs1byk.css';
import '../../css/w/w5ns5rb2p.css';
import '../../css/b/b56jsxbuc.css';
import '../../css/x/x3aeyw1bk.css';
import '../../css/u/uqtl_u28h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="eztqw9biy"><path class="l12gs1byk"/><path class="w5ns5rb2p"/><path class="b56jsxbuc"/></g><path class="x3aeyw1bk"/><path class="uqtl_u28h"/>`,
		"fallback": "openmoji:intestine",
	});
}

export default Component;
