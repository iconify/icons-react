import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x5sgogo8l.css';
import '../../css/v/vh9ln2bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x5sgogo8l"/><path class="vh9ln2bqb"/></g>`,
		"fallback": "streamline-freehand:trading-graph",
	});
}

export default Component;
