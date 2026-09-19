import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqtblfb9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqtblfb9g"/>`,
		"fallback": "academicons:mathoverflow",
	});
}

export default Component;
