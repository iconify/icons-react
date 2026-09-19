import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/apxt9bbrx.css';
import '../../css/o/opbgmbb8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="apxt9bbrx"/><path class="opbgmbb8z"/></g>`,
		"fallback": "cryptocurrency-color:ren",
	});
}

export default Component;
