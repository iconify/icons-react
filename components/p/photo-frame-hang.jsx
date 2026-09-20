import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbajsebqc.css';
import '../../css/c/cyh0x2hax.css';
import '../../css/q/q9scqob2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbajsebqc"/><path class="cyh0x2hax"/><path class="q9scqob2j"/>`,
		"fallback": "streamline-freehand:photo-frame-hang",
	});
}

export default Component;
