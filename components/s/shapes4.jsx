import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nnt95obyn.css';
import '../../css/f/f8bwbc8sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nnt95obyn"/><path class="f8bwbc8sh"/></g>`,
		"fallback": "reicon:shapes4",
	});
}

export default Component;
