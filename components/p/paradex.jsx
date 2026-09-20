import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx4um1rco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vx4um1rco"/>`,
		"fallback": "token:paradex",
	});
}

export default Component;
