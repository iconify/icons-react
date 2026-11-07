import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylytocbab.css';
import '../../css/y/yqbs--b0w.css';
import '../../css/g/gcio5b78g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylytocbab"/><path class="yqbs--b0w"/><path clip-rule="evenodd" class="gcio5b78g"/>`,
		"fallback": "solar:speaker-bold",
	});
}

export default Component;
