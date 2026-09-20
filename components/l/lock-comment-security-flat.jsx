import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bglxcs25n.css';
import '../../css/m/m1lvslblz.css';
import '../../css/t/titfr9bqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bglxcs25n"/><path clip-rule="evenodd" class="m1lvslblz"/><path clip-rule="evenodd" class="titfr9bqt"/></g>`,
		"fallback": "streamline-plump-color:lock-comment-security-flat",
	});
}

export default Component;
