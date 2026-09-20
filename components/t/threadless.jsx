import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg2l0flxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg2l0flxj"/>`,
		"fallback": "thesvg:threadless",
	});
}

export default Component;
