import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ne7b7zx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ne7b7zx"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-euro",
	});
}

export default Component;
