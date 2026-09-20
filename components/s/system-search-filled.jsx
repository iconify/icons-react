import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovbmp5yxh.css';
import '../../css/y/yt306rbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovbmp5yxh"/><path class="yt306rbnh"/>`,
		"fallback": "tdesign:system-search-filled",
	});
}

export default Component;
