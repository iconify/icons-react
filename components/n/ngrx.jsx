import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/youzr_tms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="youzr_tms"/>`,
		"fallback": "simple-icons:ngrx",
	});
}

export default Component;
