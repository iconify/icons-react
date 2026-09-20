import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdfe7tbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdfe7tbjt"/>`,
		"fallback": "thesvg-color:watchtower",
	});
}

export default Component;
