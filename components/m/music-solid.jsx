import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzuh0_bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzuh0_bqb"/>`,
		"fallback": "iconaut:music-solid",
	});
}

export default Component;
