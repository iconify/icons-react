import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvq8v1bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvq8v1bjv"/>`,
		"fallback": "mingcute:threads-fill",
	});
}

export default Component;
