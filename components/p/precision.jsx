import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oarmztb3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oarmztb3l"/>`,
		"fallback": "file-icons:precision",
	});
}

export default Component;
