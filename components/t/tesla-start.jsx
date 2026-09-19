import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uza14gbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uza14gbhx"/>`,
		"fallback": "cbi:tesla-start",
	});
}

export default Component;
