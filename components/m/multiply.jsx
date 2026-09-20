import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n93m6bbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n93m6bbzj"/>`,
		"fallback": "tdesign:multiply",
	});
}

export default Component;
