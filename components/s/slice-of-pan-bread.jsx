import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j83o6di_v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j83o6di_v"/>`,
		"fallback": "pinhead:slice-of-pan-bread",
	});
}

export default Component;
