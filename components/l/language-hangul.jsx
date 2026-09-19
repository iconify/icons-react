import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk2198b_z.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk2198b_z"/>`,
		"fallback": "dinkie-icons:language-hangul",
	});
}

export default Component;
