import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiff2c8dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiff2c8dx"/>`,
		"fallback": "noviair-light:user-plus",
	});
}

export default Component;
