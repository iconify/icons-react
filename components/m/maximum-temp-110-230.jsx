import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y893vacol.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y893vacol"/>`,
		"fallback": "ps:maximum-temp-110-230",
	});
}

export default Component;
