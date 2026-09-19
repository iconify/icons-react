import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebr0d7qtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebr0d7qtr"/>`,
		"fallback": "file-icons:reasonstudios-alt",
	});
}

export default Component;
