import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uo05yyjpj.css';
import '../../css/f/fm01msbde.css';
import '../../css/g/g1o6erbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="uo05yyjpj"/><path class="fm01msbde"/><path class="g1o6erbxj"/></g>`,
		"fallback": "proicons:ubuntu",
	});
}

export default Component;
