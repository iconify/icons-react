import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b572sebbf.css';
import '../../css/s/sqgcj3ezp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b572sebbf"/><path class="sqgcj3ezp"/>`,
		"fallback": "qlementine-icons:repeat-one-16",
	});
}

export default Component;
