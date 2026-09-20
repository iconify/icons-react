import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx0x-mbff.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx0x-mbff"/>`,
		"fallback": "temaki:tower",
	});
}

export default Component;
