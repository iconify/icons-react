import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/x/xvzz_l1rf.css';
import '../../css/y/ytyd6dv6g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVG1GvD9dYf"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="xvzz_l1rf"/><path class="ytyd6dv6g"/></g></mask></defs><circle mask="url(#SVG1GvD9dYf)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:music-note-double-circle-filled",
	});
}

export default Component;
