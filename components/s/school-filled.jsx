import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxpyef0hm.css';
import '../../css/e/ext4fquee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxpyef0hm"/><path class="ext4fquee"/>`,
		"fallback": "boxicons:school-filled",
	});
}

export default Component;
