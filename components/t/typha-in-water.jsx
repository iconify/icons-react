import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5r_0bit.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to5r_0bit"/>`,
		"fallback": "pinhead:typha-in-water",
	});
}

export default Component;
