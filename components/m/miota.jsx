import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w6f4dzb_u.css';
import '../../css/k/kbsnwzbkg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="w6f4dzb_u"/><path class="kbsnwzbkg"/></g>`,
		"fallback": "cryptocurrency-color:miota",
	});
}

export default Component;
