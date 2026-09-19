import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyhrc7b4c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyhrc7b4c"/>`,
		"fallback": "whh:speedalt",
	});
}

export default Component;
