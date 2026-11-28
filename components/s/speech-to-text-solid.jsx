import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugr2cuw1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugr2cuw1z"/>`,
		"fallback": "iconaut:speech-to-text-solid",
	});
}

export default Component;
