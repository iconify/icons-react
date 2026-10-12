import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9rq2vbvd.css';
import '../../css/t/tbg_-4bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w9rq2vbvd"/><rect class="tbg_-4bcz"/></g>`,
		"fallback": "andrsrxn:subtitles-filled",
	});
}

export default Component;
