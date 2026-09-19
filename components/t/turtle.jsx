import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2imiqbsb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2imiqbsb"/>`,
		"fallback": "dinkie-icons:turtle",
	});
}

export default Component;
