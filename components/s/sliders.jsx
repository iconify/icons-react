import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qv35mhr5v.css';
import '../../css/h/ho8lzkf2o.css';
import '../../css/c/cowgu0bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qv35mhr5v wm-shadow"/><path class="ho8lzkf2o wm-shadow"/><path class="cowgu0bvt"/></g>`,
		"fallback": "withicons-brutal:sliders",
	});
}

export default Component;
