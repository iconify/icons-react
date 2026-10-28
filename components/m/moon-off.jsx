import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjtzebzu.css';
import '../../css/x/xx4r8n6vm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otjtzebzu"/><path class="xx4r8n6vm"/></g>`,
		"fallback": "andrsrxn:moon-off",
	});
}

export default Component;
