import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c13cihn2q.css';
import '../../css/z/z_v9rgb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c13cihn2q"/><path class="z_v9rgb6u"/></g>`,
		"fallback": "thesvg:myshell",
	});
}

export default Component;
