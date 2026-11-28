import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx4jzebmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xx4jzebmm"/>`,
		"fallback": "iconaut:train-track-duotone",
	});
}

export default Component;
