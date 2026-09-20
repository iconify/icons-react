import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfjpwsbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfjpwsbks"/>`,
		"fallback": "tdesign:numbers-9-1",
	});
}

export default Component;
