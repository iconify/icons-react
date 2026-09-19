import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4e783_3e.css';
import '../../css/v/vq5z-rl-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4e783_3e"/><path class="vq5z-rl-i"/>`,
		"fallback": "bxl:linktree",
	});
}

export default Component;
