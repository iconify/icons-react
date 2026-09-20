import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/govh8ub-s.css';
import '../../css/j/jn3hvib0u.css';
import '../../css/d/d9-_oz34n.css';
import '../../css/g/ghv23_b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="govh8ub-s"/><path class="jn3hvib0u"/><path class="d9-_oz34n"/><path class="ghv23_b_v"/></g>`,
		"fallback": "streamline-ultimate-color:monitor-upload",
	});
}

export default Component;
