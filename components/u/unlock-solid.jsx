import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrn2ykbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrn2ykbyk"/>`,
		"fallback": "pixel:unlock-solid",
	});
}

export default Component;
