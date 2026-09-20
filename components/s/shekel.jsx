import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nol1jj94z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nol1jj94z"/>`,
		"fallback": "pinhead:shekel",
	});
}

export default Component;
