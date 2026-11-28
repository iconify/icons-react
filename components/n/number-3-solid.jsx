import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqu3ykbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqu3ykbth"/>`,
		"fallback": "iconaut:number-3-solid",
	});
}

export default Component;
