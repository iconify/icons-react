import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzuua4itw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzuua4itw"/>`,
		"fallback": "iconaut:spray-can-solid",
	});
}

export default Component;
