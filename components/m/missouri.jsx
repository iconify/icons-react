import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nekns-b1f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nekns-b1f"/>`,
		"fallback": "pinhead:missouri",
	});
}

export default Component;
