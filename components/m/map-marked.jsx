import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxb-154go.css';
import '../../css/c/cpvmedcvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qxb-154go"/><path class="cpvmedcvu"/></g>`,
		"fallback": "tdesign:map-marked",
	});
}

export default Component;
