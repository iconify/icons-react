import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaw1tfb7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaw1tfb7s"/>`,
		"fallback": "garden:phone-fill-16",
	});
}

export default Component;
