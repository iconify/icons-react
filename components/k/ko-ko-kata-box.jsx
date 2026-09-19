import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0j9h1vcp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0j9h1vcp"/>`,
		"fallback": "dinkie-icons:ko-ko-kata-box",
	});
}

export default Component;
