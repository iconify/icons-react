import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfg2xib9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfg2xib9d"/>`,
		"fallback": "selfhst:secureai-tools-light",
	});
}

export default Component;
