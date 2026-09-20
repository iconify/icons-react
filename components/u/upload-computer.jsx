import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztg319kwr.css';
import '../../css/j/jxv6qwben.css';
import '../../css/m/mkk0_hb2w.css';
import '../../css/s/s1xu5tb3y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztg319kwr"/><path class="jxv6qwben"/><path class="mkk0_hb2w"/><path class="s1xu5tb3y"/></g>`,
		"fallback": "streamline-color:upload-computer",
	});
}

export default Component;
