import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbqs36b0l.css';
import '../../css/i/idq21ccvs.css';
import '../../css/p/px-2omb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbqs36b0l"/><path class="idq21ccvs"/><path class="px-2omb7u"/></g>`,
		"fallback": "streamline-cyber-color:piano-1",
	});
}

export default Component;
