import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g71oirb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g71oirb4l"/>`,
		"fallback": "thesvg-color:matter",
	});
}

export default Component;
