import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iimi6hbyf.css';
import '../../css/y/ykjx0obgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iimi6hbyf"/><path class="ykjx0obgk"/></g>`,
		"fallback": "streamline-freehand:meeting-co-working-2",
	});
}

export default Component;
