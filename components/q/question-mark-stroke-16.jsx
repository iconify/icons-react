import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhpmsjbax.css';
import '../../css/t/t-jbtsufb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qhpmsjbax"/><path class="t-jbtsufb"/>`,
		"fallback": "garden:question-mark-stroke-16",
	});
}

export default Component;
