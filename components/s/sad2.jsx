import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1c4z18tk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1c4z18tk"/>`,
		"fallback": "icomoon-free:sad2",
	});
}

export default Component;
