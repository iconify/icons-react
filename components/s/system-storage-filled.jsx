import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sul7jy1tl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sul7jy1tl"/>`,
		"fallback": "tdesign:system-storage-filled",
	});
}

export default Component;
