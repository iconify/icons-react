import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qunw-5bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qunw-5bun"/>`,
		"fallback": "iconaut:pipe-solid",
	});
}

export default Component;
