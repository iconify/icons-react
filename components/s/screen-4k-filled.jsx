import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdopu7blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdopu7blc"/>`,
		"fallback": "tdesign:screen-4k-filled",
	});
}

export default Component;
