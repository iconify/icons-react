import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca45o2iyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca45o2iyv"/>`,
		"fallback": "mingcute:keying-line",
	});
}

export default Component;
