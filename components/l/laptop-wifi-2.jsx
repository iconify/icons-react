import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnneqxbcj.css';
import '../../css/b/b5ky2duvu.css';
import '../../css/j/je-hdc4rf.css';
import '../../css/j/j6zz6dbbz.css';
import '../../css/c/css8psb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnneqxbcj"/><path class="b5ky2duvu"/><path class="je-hdc4rf"/><path class="j6zz6dbbz"/><path class="css8psb1a"/></g>`,
		"fallback": "streamline-cyber-color:laptop-wifi-2",
	});
}

export default Component;
