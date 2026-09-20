import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_3txeeom.css';
import '../../css/n/nhyz14bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(0 -1 -1 0 18 20)" class="l_3txeeom"/><path class="nhyz14bqt"/></g>`,
		"fallback": "lets-icons:load-circle-duotone",
	});
}

export default Component;
