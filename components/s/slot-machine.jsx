import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccydevo3u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccydevo3u"/>`,
		"fallback": "dinkie-icons:slot-machine",
	});
}

export default Component;
