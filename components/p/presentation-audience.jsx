import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qul6b_1xq.css';
import '../../css/k/kdanzpkky.css';
import '../../css/n/n60idm96g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qul6b_1xq"/><path class="kdanzpkky"/><path class="n60idm96g"/></g>`,
		"fallback": "streamline-freehand-color:presentation-audience",
	});
}

export default Component;
