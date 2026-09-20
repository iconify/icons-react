import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9b08--1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9b08--1o"/>`,
		"fallback": "thesvg:onlyoffice",
	});
}

export default Component;
