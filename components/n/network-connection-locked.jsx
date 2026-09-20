import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mr7zqwbog.css';
import '../../css/u/usal8xb7u.css';
import '../../css/p/ph9bfgb1s.css';
import '../../css/v/vde5abbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mr7zqwbog"/><path class="usal8xb7u"/><path class="ph9bfgb1s"/><path class="vde5abbxu"/></g>`,
		"fallback": "streamline-freehand-color:network-connection-locked",
	});
}

export default Component;
