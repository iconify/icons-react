import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td3kli-dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td3kli-dq"/>`,
		"fallback": "iconaut:shovel-solid",
	});
}

export default Component;
