import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-_vrw8jp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-_vrw8jp"/>`,
		"fallback": "thesvg-color:quad9",
	});
}

export default Component;
