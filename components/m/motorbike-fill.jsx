import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlyu3-1bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlyu3-1bi"/>`,
		"fallback": "ri:motorbike-fill",
	});
}

export default Component;
