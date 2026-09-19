import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi8h8gaxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi8h8gaxs"/>`,
		"fallback": "file-icons:powershell",
	});
}

export default Component;
