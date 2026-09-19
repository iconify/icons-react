import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqve-bc3z.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqve-bc3z"/>`,
		"fallback": "fa-solid:microphone-slash",
	});
}

export default Component;
