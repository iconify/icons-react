import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i4a6ybbry.css';
import '../../css/q/qi6yf8o1f.css';
import '../../css/n/nzz56f8ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i4a6ybbry"/><path class="qi6yf8o1f"/><path class="nzz56f8ie"/></g>`,
		"fallback": "streamline-freehand-color:video-game-nintendo",
	});
}

export default Component;
