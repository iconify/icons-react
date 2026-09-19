import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/z/zy9xvtb4y.css';
import '../../css/a/aaj8i5b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="zy9xvtb4y"/><path class="aaj8i5b3s"/></g>`,
		"fallback": "iconoir:mail-in-solid",
	});
}

export default Component;
