import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljw_3tj1h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljw_3tj1h"/>`,
		"fallback": "thesvg-color:kserve-dark",
	});
}

export default Component;
