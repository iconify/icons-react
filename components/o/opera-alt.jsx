import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvesc-9me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvesc-9me"/>`,
		"fallback": "uit:opera-alt",
	});
}

export default Component;
