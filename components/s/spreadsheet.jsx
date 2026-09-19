import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4-k7yoz.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4-k7yoz"/>`,
		"fallback": "whh:spreadsheet",
	});
}

export default Component;
