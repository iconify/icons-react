import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3fdwzbno.css';
import '../../css/k/kdhbkrwgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3fdwzbno"/><path class="kdhbkrwgj"/></g>`,
		"fallback": "tdesign:service",
	});
}

export default Component;
