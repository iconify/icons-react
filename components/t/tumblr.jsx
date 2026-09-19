import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qsplo5bng.css';
import '../../css/t/turfdqb5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qsplo5bng"/><path class="turfdqb5v"/></g>`,
		"fallback": "icon-park-outline:tumblr",
	});
}

export default Component;
