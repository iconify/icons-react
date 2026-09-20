import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4ywnwb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4ywnwb3x"/>`,
		"fallback": "token:pro",
	});
}

export default Component;
