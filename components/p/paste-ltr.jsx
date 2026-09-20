import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueb6e8bmp.css';
import '../../css/i/i0qqi58le.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueb6e8bmp"/><path class="i0qqi58le"/>`,
		"fallback": "ooui:paste-ltr",
	});
}

export default Component;
