import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xmdnn18wf.css';
import '../../css/c/clxg1db4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xmdnn18wf"/><path class="clxg1db4v"/></g>`,
		"fallback": "iconoir:transition-bottom",
	});
}

export default Component;
