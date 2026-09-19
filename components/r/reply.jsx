import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqhi9hx0g.css';

const viewBox = {"width":1185,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqhi9hx0g"/>`,
		"fallback": "websymbol:reply",
	});
}

export default Component;
