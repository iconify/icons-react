import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c1yl4eviw.css';
import '../../css/m/md286fbip.css';
import '../../css/m/m7qoyzbmt.css';
import '../../css/w/w5l_6vebe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="c1yl4eviw"/><g class="md286fbip"><path class="m7qoyzbmt"/><path class="w5l_6vebe"/></g></g>`,
		"fallback": "cryptocurrency-color:payx",
	});
}

export default Component;
