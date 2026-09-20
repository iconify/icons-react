import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsm7l6b8m.css';
import '../../css/x/xjtbn43zn.css';

const viewBox = {"width":94,"height":61};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xsm7l6b8m"/><path class="xjtbn43zn"/></g>`,
		"fallback": "thesvg-color:react-router",
	});
}

export default Component;
