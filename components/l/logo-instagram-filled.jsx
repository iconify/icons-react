import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwuekqkoy.css';
import '../../css/x/x7a-2lu-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwuekqkoy"/><path class="x7a-2lu-d"/>`,
		"fallback": "tdesign:logo-instagram-filled",
	});
}

export default Component;
