import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilxn7f33c.css';
import '../../css/e/e-qkt480u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilxn7f33c"/><path clip-rule="evenodd" class="e-qkt480u"/>`,
		"fallback": "qlementine-icons:layout-screen-vertical-16",
	});
}

export default Component;
