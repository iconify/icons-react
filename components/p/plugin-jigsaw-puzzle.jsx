import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/izpkp1b1n.css';
import '../../css/y/yprxtg4ex.css';
import '../../css/v/vw141hbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="izpkp1b1n"/><path class="yprxtg4ex"/><path class="vw141hbiq"/></g>`,
		"fallback": "streamline-freehand:plugin-jigsaw-puzzle",
	});
}

export default Component;
