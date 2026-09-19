import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn_z0tbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn_z0tbkh"/>`,
		"fallback": "iconoir:star",
	});
}

export default Component;
