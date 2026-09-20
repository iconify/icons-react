import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyhzczbpi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyhzczbpi"/>`,
		"fallback": "streamline:interface-user-human-geometric-human-person-single-user",
	});
}

export default Component;
