import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz2qqub9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz2qqub9p"/>`,
		"fallback": "iconaut:square-round-corner-solid",
	});
}

export default Component;
