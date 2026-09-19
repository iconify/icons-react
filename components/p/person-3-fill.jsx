import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkoonwrcn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkoonwrcn"/>`,
		"fallback": "f7:person-3-fill",
	});
}

export default Component;
