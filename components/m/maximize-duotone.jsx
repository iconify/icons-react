import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n1ae72sgo.css';
import '../../css/r/rz51tac-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n1ae72sgo"/><path class="rz51tac-w"/></g>`,
		"fallback": "reicon:maximize-duotone",
	});
}

export default Component;
