import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwkoxnbil.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwkoxnbil"/>`,
		"fallback": "pinhead:rounded-square-outline-with-square-dot",
	});
}

export default Component;
