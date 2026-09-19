import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa150nb_j.css';
import '../../css/m/md286fbip.css';
import '../../css/u/u6vkkgxia.css';
import '../../css/r/rmxm7klsj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="aa150nb_j"/><g class="md286fbip"><path class="u6vkkgxia"/><path class="rmxm7klsj"/></g></g>`,
		"fallback": "cryptocurrency-color:safemoon",
	});
}

export default Component;
