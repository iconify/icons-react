import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uja-nib7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uja-nib7x"/>`,
		"fallback": "file-icons:propeller",
	});
}

export default Component;
