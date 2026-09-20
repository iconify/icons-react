import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8e133b5a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8e133b5a"/>`,
		"fallback": "pinhead:khanda",
	});
}

export default Component;
