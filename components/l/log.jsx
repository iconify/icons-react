import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xv6sb0vcm.css';
import '../../css/j/jkdnodbrt.css';
import '../../css/e/ekmgl_bye.css';
import '../../css/k/kmhl1_rdk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xv6sb0vcm"/><path class="jkdnodbrt"/><path class="ekmgl_bye"/><path class="kmhl1_rdk"/></g>`,
		"fallback": "streamline-color:log",
	});
}

export default Component;
