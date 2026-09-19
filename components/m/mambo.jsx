import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afltnac5o.css';

const viewBox = {"width":1026,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afltnac5o"/>`,
		"fallback": "whh:mambo",
	});
}

export default Component;
