import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_dj60b6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_dj60b6t"/>`,
		"fallback": "file-icons:microsoft-excel",
	});
}

export default Component;
