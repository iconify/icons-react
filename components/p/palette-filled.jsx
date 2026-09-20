import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vao4db3gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vao4db3gf"/>`,
		"fallback": "tdesign:palette-filled",
	});
}

export default Component;
