import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qls5yob2g.css';
import '../../css/u/ubrk5ee6a.css';
import '../../css/a/aquf-jb9e.css';
import '../../css/b/bsgsx4b-b.css';
import '../../css/p/p_03qcbda.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qls5yob2g"/><path class="ubrk5ee6a"/><path class="aquf-jb9e"/><path class="bsgsx4b-b"/><path class="p_03qcbda"/></g>`,
		"fallback": "fluent-emoji-flat:one-oclock",
	});
}

export default Component;
