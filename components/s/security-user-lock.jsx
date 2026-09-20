import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7zflcgyt.css';
import '../../css/b/bvr4std4t.css';
import '../../css/t/twjjy2bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7zflcgyt"/><path class="bvr4std4t"/><path class="twjjy2bks"/></g>`,
		"fallback": "streamline-freehand-color:security-user-lock",
	});
}

export default Component;
