import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghu6qbdwc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghu6qbdwc"/>`,
		"fallback": "dinkie-icons:pushpin-filled",
	});
}

export default Component;
