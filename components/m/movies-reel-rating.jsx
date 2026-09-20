import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/id5b96b_s.css';
import '../../css/q/qvhu7ob2r.css';
import '../../css/b/b1dzrsyqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="id5b96b_s"/><path class="qvhu7ob2r"/><path class="b1dzrsyqb"/></g>`,
		"fallback": "streamline-freehand-color:movies-reel-rating",
	});
}

export default Component;
