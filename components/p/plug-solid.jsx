import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wuxzf3bmg.css';
import '../../css/n/nfjgaib0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wuxzf3bmg"/><path class="nfjgaib0v wm-a"/></g>`,
		"fallback": "withicons:plug-solid",
	});
}

export default Component;
