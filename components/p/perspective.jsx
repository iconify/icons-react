import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ft4zavhnt.css';
import '../../css/r/rqalebfjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ft4zavhnt"/><path class="rqalebfjn"/></g>`,
		"fallback": "hugeicons:perspective",
	});
}

export default Component;
