import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb92sq2ky.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb92sq2ky"/>`,
		"fallback": "pinhead:six-minus-above-water",
	});
}

export default Component;
