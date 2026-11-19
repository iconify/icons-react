import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_sydvb9s.css';
import '../../css/r/rmywqib-i.css';
import '../../css/h/hks0ftwhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p_sydvb9s"/><path class="rmywqib-i"/><path class="hks0ftwhu"/></g>`,
		"fallback": "andrsrxn:news",
	});
}

export default Component;
