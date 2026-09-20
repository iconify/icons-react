import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bs4k6fbtt.css';
import '../../css/m/m3xbg9eod.css';
import '../../css/u/u8zehtrfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bs4k6fbtt"/><path class="m3xbg9eod"/><path class="u8zehtrfs"/></g>`,
		"fallback": "streamline-freehand:job-briefcase-document",
	});
}

export default Component;
