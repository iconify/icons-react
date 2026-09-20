import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vbtr1yb8p.css';
import '../../css/c/c05mf6rvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vbtr1yb8p"/><path class="c05mf6rvs"/></g>`,
		"fallback": "reicon:play-circle",
	});
}

export default Component;
