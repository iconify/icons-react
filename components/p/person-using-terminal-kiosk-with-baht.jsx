import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0opr_u6k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0opr_u6k"/>`,
		"fallback": "pinhead:person-using-terminal-kiosk-with-baht",
	});
}

export default Component;
