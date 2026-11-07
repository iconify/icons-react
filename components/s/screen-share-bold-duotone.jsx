import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aof5xebnh.css';
import '../../css/i/i2cm9bb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aof5xebnh"/><path clip-rule="evenodd" class="i2cm9bb_e"/>`,
		"fallback": "solar:screen-share-bold-duotone",
	});
}

export default Component;
