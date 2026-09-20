import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhsm7kb0w.css';
import '../../css/o/or3-x485d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hhsm7kb0w"/><path class="or3-x485d"/></g>`,
		"fallback": "streamline-color:pyramid-shape-flat",
	});
}

export default Component;
