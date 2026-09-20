import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyklqjb4h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyklqjb4h"/>`,
		"fallback": "pinhead:motorboat-and-wrench",
	});
}

export default Component;
