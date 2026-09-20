import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qml99rnqd.css';
import '../../css/i/imcjgjb4f.css';
import '../../css/f/flzkd7s7q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qml99rnqd"/><path class="imcjgjb4f"/><path class="flzkd7s7q"/>`,
		"fallback": "octicon:issue-locked-16",
	});
}

export default Component;
