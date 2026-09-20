import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r58ixwp-q.css';
import '../../css/r/rt3ps1ufg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r58ixwp-q"/><path class="rt3ps1ufg"/></g>`,
		"fallback": "streamline-color:pacman-flat",
	});
}

export default Component;
