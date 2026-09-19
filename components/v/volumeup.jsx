import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fit-5cnqv.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fit-5cnqv"/>`,
		"fallback": "whh:volumeup",
	});
}

export default Component;
