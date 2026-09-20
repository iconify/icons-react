import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/o/otit0l4ks.css';
import '../../css/q/qoxu7fbss.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><circle class="otit0l4ks"/><path class="qoxu7fbss"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:slightly-smiling-face",
	});
}

export default Component;
