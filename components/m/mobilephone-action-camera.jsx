import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a5io6st5w.css';
import '../../css/m/m0gtvlu8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a5io6st5w"/><path class="m0gtvlu8f"/></g>`,
		"fallback": "streamline-freehand-color:mobilephone-action-camera",
	});
}

export default Component;
