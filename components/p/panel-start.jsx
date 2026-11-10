import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilqn_0g8c.css';
import '../../css/z/zc4guwb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilqn_0g8c"/><path class="zc4guwb5p"/></g>`,
		"fallback": "andrsrxn:panel-start",
	});
}

export default Component;
