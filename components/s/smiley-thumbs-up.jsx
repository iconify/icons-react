import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx2nxk0bk.css';
import '../../css/n/ndzomeb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx2nxk0bk"/><path class="ndzomeb7u"/>`,
		"fallback": "streamline-freehand:smiley-thumbs-up",
	});
}

export default Component;
