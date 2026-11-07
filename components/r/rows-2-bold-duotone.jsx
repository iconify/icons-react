import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl89sibfb.css';
import '../../css/n/nayqy1c_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl89sibfb"/><path class="nayqy1c_r"/>`,
		"fallback": "solar:rows-2-bold-duotone",
	});
}

export default Component;
