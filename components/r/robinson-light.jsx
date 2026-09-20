import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tecp77bpz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tecp77bpz"/>`,
		"fallback": "selfhst:robinson-light",
	});
}

export default Component;
