import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9mgh_1ih.css';
import '../../css/o/osn5q0bun.css';
import '../../css/b/b2vi1jmew.css';
import '../../css/b/bqsnk8bjb.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x9mgh_1ih"/><path class="osn5q0bun"/><path class="b2vi1jmew"/><path class="bqsnk8bjb"/></g>`,
		"fallback": "cif:to",
	});
}

export default Component;
