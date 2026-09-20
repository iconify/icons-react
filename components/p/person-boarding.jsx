import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_1ean58s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_1ean58s"/>`,
		"fallback": "pinhead:person-boarding",
	});
}

export default Component;
