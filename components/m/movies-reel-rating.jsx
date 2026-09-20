import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zwbeybb7p.css';
import '../../css/a/a0u8z-s2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zwbeybb7p"/><path class="a0u8z-s2z"/></g>`,
		"fallback": "streamline-freehand:movies-reel-rating",
	});
}

export default Component;
