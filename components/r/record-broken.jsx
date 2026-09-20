import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifxixjbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifxixjbli"/>`,
		"fallback": "solar:record-broken",
	});
}

export default Component;
