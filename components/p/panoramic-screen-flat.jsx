import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q9z-kg90q.css';
import '../../css/o/obs3dntoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q9z-kg90q"/><path class="obs3dntoi"/></g>`,
		"fallback": "streamline-sharp-color:panoramic-screen-flat",
	});
}

export default Component;
