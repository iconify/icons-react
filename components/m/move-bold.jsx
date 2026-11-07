import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnoj3cihf.css';
import '../../css/t/t4ld3deyo.css';
import '../../css/f/f8n3u4syj.css';
import '../../css/l/lgqb26d1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnoj3cihf"/><path class="t4ld3deyo"/><path class="f8n3u4syj"/><path class="lgqb26d1v"/>`,
		"fallback": "solar:move-bold",
	});
}

export default Component;
