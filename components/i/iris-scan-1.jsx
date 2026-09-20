import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mxe3o9_bl.css';
import '../../css/c/cgprzzyer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mxe3o9_bl"/><path class="cgprzzyer"/></g>`,
		"fallback": "streamline-ultimate:iris-scan-1",
	});
}

export default Component;
