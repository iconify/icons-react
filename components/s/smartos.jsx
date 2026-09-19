import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3pcv7b2e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3pcv7b2e"/>`,
		"fallback": "file-icons:smartos",
	});
}

export default Component;
