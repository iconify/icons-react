import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laxrx2gyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laxrx2gyp"/>`,
		"fallback": "boxicons:rewind-circle-filled",
	});
}

export default Component;
