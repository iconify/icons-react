import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lg9n58dcn.css';
import '../../css/u/u6mvapbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="lg9n58dcn"/><path class="u6mvapbjj wm-a"/></g>`,
		"fallback": "withicons:santa-hat-solid",
	});
}

export default Component;
