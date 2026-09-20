import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i49nfm8_u.css';
import '../../css/n/necix-a9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i49nfm8_u"/><path class="necix-a9p"/></g>`,
		"fallback": "streamline-flex-color:text-file",
	});
}

export default Component;
