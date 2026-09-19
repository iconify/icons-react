import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhke-gbra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhke-gbra"/>`,
		"fallback": "file-icons:tsx",
	});
}

export default Component;
