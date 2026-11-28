import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtmobu58j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtmobu58j"/>`,
		"fallback": "iconaut:kerning-solid",
	});
}

export default Component;
