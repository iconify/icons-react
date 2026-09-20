import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kflq1srsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kflq1srsz"/>`,
		"fallback": "si:warning-line",
	});
}

export default Component;
