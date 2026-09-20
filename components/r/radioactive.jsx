import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4jw8wbpz.css';
import '../../css/j/jxqi2jbpi.css';
import '../../css/i/i3kk-g2-z.css';
import '../../css/j/j55quss0c.css';
import '../../css/j/j5h59ccev.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f4jw8wbpz"/><g class="jxqi2jbpi"><circle class="i3kk-g2-z"/><path class="j55quss0c"/><circle class="j5h59ccev"/></g>`,
		"fallback": "openmoji:radioactive",
	});
}

export default Component;
