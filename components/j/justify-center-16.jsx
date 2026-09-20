import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i001kvvwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i001kvvwn"/>`,
		"fallback": "qlementine-icons:justify-center-16",
	});
}

export default Component;
