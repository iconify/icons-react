import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmh8e6bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmh8e6bux"/>`,
		"fallback": "thesvg-color:qiniu",
	});
}

export default Component;
