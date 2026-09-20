import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i5f65flri.css';
import '../../css/y/yt8tz_keu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i5f65flri"/><path class="yt8tz_keu"/></g>`,
		"fallback": "streamline-freehand:office-desk-1",
	});
}

export default Component;
