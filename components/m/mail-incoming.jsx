import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrswy588w.css';
import '../../css/y/yhcgrnbxj.css';
import '../../css/k/kchffudor.css';
import '../../css/m/m1y5-opsa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lrswy588w"/><path class="yhcgrnbxj"/><path class="kchffudor"/><path class="m1y5-opsa"/></g>`,
		"fallback": "streamline-color:mail-incoming",
	});
}

export default Component;
