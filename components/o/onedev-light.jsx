import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvj0q6bsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvj0q6bsb"/>`,
		"fallback": "selfhst:onedev-light",
	});
}

export default Component;
