import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx8m87bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx8m87bvo"/>`,
		"fallback": "token:mkr",
	});
}

export default Component;
