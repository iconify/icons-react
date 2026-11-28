import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfs789bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfs789bul"/>`,
		"fallback": "noviair:prompt-play",
	});
}

export default Component;
