import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utda-fnho.css';
import '../../css/d/dvucy2b6c.css';
import '../../css/e/e4g6mlfws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="utda-fnho"/><path class="dvucy2b6c"/><path class="e4g6mlfws"/></g>`,
		"fallback": "streamline-ultimate-color:soundcloud-logo",
	});
}

export default Component;
