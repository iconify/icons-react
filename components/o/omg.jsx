import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8cn0cczp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8cn0cczp"/>`,
		"fallback": "cryptocurrency:omg",
	});
}

export default Component;
