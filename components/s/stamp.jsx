import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/c/cukiv3ibm.css';
import '../../css/o/o_z-5bebw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="cukiv3ibm"/><path class="o_z-5bebw"/></g>`,
		"fallback": "streamline-plump:stamp",
	});
}

export default Component;
