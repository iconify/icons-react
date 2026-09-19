import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymnhmfz_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymnhmfz_i"/>`,
		"fallback": "guidance:stadium",
	});
}

export default Component;
