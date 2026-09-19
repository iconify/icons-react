import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv-ung4uf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv-ung4uf"/>`,
		"fallback": "dinkie-icons:robot-filled",
	});
}

export default Component;
