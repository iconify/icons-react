import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6dlgpert.css';
import '../../css/c/c0ix4zbqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g6dlgpert"/><path class="c0ix4zbqe"/></g>`,
		"fallback": "iconoir:journal-page",
	});
}

export default Component;
