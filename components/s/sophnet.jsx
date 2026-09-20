import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_pka1byr.css';
import '../../css/n/noq947kih.css';
import '../../css/t/th9olvpcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o_pka1byr"/><path class="noq947kih"/><path class="th9olvpcn"/></g>`,
		"fallback": "thesvg:sophnet",
	});
}

export default Component;
