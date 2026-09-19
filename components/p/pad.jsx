import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0tgaubdo.css';
import '../../css/p/poacj3ecw.css';
import '../../css/v/vtcnsjnlh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w0tgaubdo"/><path class="poacj3ecw"/><path class="vtcnsjnlh"/></g>`,
		"fallback": "icon-park-outline:pad",
	});
}

export default Component;
