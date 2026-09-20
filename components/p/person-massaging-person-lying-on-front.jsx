import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnac4ibum.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnac4ibum"/>`,
		"fallback": "pinhead:person-massaging-person-lying-on-front",
	});
}

export default Component;
