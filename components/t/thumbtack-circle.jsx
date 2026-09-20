import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qof78ob_g.css';
import '../../css/k/km-vo0wok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qof78ob_g"/><path class="km-vo0wok"/></g>`,
		"fallback": "reicon:thumbtack-circle",
	});
}

export default Component;
