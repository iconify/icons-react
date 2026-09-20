import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv5-8abpp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv5-8abpp"/>`,
		"fallback": "pinhead:soccer-ball",
	});
}

export default Component;
