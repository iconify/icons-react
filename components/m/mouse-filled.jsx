import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2nae0b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2nae0b0m"/>`,
		"fallback": "tdesign:mouse-filled",
	});
}

export default Component;
