import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj-378b7y.css';
import '../../css/n/nblq3cbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj-378b7y"/><path class="nblq3cbsn"/>`,
		"fallback": "eva:mic-fill",
	});
}

export default Component;
