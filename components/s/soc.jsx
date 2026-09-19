import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cdqelk83j.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fy8e6rbyj.css';
import '../../css/d/d10m3acgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="cdqelk83j"/><g class="md286fbip"><path class="fy8e6rbyj"/><path class="d10m3acgu"/></g></g>`,
		"fallback": "cryptocurrency-color:soc",
	});
}

export default Component;
