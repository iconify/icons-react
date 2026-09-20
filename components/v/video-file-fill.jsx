import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9vxvpbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9vxvpbhk"/>`,
		"fallback": "lets-icons:video-file-fill",
	});
}

export default Component;
