import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqq4c7qxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqq4c7qxe"/>`,
		"fallback": "cbi:transmission-bt",
	});
}

export default Component;
