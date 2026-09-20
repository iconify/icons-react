import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rlqqb9o6m.css';
import '../../css/a/aa4skmbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rlqqb9o6m"/><path class="aa4skmbek"/></g>`,
		"fallback": "streamline-freehand-color:job-choose-candidate",
	});
}

export default Component;
