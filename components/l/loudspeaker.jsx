import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2wjsd2bw.css';
import '../../css/b/br6g27b-g.css';
import '../../css/p/pnzorx2au.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/c4ybfgbdw.css';
import '../../css/n/nxjkb3bbd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r2wjsd2bw"/><path class="br6g27b-g"/><path class="pnzorx2au"/><g class="jn8qy4bru"><path class="c4ybfgbdw"/><path class="nxjkb3bbd"/></g>`,
		"fallback": "openmoji:loudspeaker",
	});
}

export default Component;
