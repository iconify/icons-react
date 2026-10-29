import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fbojzcbcf.css';
import '../../css/r/r3a8md40z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fbojzcbcf"/><path class="r3a8md40z wm-a"/></g>`,
		"fallback": "withicons:log-out-solid",
	});
}

export default Component;
