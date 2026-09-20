import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wct01yjnh.css';

const viewBox = {"width":200,"height":92.11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wct01yjnh"/>`,
		"fallback": "thesvg-color:ngrok-light",
	});
}

export default Component;
