import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekzeb4jic.css';
import '../../css/b/by174fbnq.css';
import '../../css/u/uvfv-il9k.css';
import '../../css/n/n-b0hwo6i.css';
import '../../css/f/f_ab0acev.css';
import '../../css/n/nffkeux5n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekzeb4jic"/><path class="by174fbnq"/><path class="uvfv-il9k"/><path class="n-b0hwo6i"/><path class="f_ab0acev"/><circle class="nffkeux5n"/>`,
		"fallback": "flat-color-icons:two-smartphones",
	});
}

export default Component;
