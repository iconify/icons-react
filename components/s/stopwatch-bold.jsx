import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/stpko5b3d.css';
import '../../css/j/jt6ysnb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="stpko5b3d"/><path class="jt6ysnb2g"/></g>`,
		"fallback": "solar:stopwatch-bold",
	});
}

export default Component;
