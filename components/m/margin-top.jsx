import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv-2dkxjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv-2dkxjd"/>`,
		"fallback": "boxicons:margin-top",
	});
}

export default Component;
