import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzo26gbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzo26gbnm"/>`,
		"fallback": "noviair-light:smartwatch",
	});
}

export default Component;
