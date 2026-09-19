import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baoz4od4r.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baoz4od4r"/>`,
		"fallback": "whh:sizzle",
	});
}

export default Component;
