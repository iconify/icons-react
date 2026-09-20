import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so7wwzbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so7wwzbyy"/>`,
		"fallback": "streamline-ultimate:lock-5-bold",
	});
}

export default Component;
