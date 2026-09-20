import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vws7xf1nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vws7xf1nk"/>`,
		"fallback": "tdesign:play-rectangle-filled",
	});
}

export default Component;
