import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmq9ttbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmq9ttbfw"/>`,
		"fallback": "reicon:star-fall4",
	});
}

export default Component;
