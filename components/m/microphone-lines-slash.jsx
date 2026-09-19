import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgig-me-p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgig-me-p"/>`,
		"fallback": "fa6-solid:microphone-lines-slash",
	});
}

export default Component;
