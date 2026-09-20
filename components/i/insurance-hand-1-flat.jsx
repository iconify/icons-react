import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvbpui7dm.css';
import '../../css/c/cfvl0ybsz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvbpui7dm"/><path clip-rule="evenodd" class="cfvl0ybsz"/></g>`,
		"fallback": "streamline-flex-color:insurance-hand-1-flat",
	});
}

export default Component;
