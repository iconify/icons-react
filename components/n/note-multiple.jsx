import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3ozd0t_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3ozd0t_j"/>`,
		"fallback": "pixelarticons:note-multiple",
	});
}

export default Component;
