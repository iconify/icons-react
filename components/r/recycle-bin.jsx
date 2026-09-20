import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lggynxb6a.css';
import '../../css/e/eyfcvmxim.css';
import '../../css/g/gsjgkj1hq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lggynxb6a"/><path class="eyfcvmxim"/><path class="gsjgkj1hq"/></g>`,
		"fallback": "streamline-flex-color:recycle-bin",
	});
}

export default Component;
