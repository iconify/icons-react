import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg6-z-39m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg6-z-39m"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-shekel",
	});
}

export default Component;
