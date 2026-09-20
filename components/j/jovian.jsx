import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiyclc4dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiyclc4dh"/>`,
		"fallback": "thesvg-color:jovian",
	});
}

export default Component;
