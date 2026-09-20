import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yipit4bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yipit4bax"/>`,
		"fallback": "uil:square-full",
	});
}

export default Component;
