import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-i-v1v3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-i-v1v3h"/>`,
		"fallback": "file-icons:lefthook",
	});
}

export default Component;
