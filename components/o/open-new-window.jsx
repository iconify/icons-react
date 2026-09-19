import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3dwxpbxj.css';
import '../../css/e/ey45k9b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3dwxpbxj"/><path class="ey45k9b5w"/></g>`,
		"fallback": "iconoir:open-new-window",
	});
}

export default Component;
