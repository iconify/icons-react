import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzpxzpblh.css';
import '../../css/c/cb_ci4bjj.css';
import '../../css/m/mfdfogbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzpxzpblh"/><path class="cb_ci4bjj"/><path class="mfdfogbom"/></g>`,
		"fallback": "streamline-freehand-color:office-photocopy-machine-2",
	});
}

export default Component;
