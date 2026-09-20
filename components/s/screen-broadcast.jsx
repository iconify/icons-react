import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-uszaboy.css';
import '../../css/i/i4feh51ms.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h-uszaboy"/><path class="i4feh51ms"/></g>`,
		"fallback": "streamline-flex-color:screen-broadcast",
	});
}

export default Component;
