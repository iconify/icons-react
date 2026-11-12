import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-vaxx0ja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-vaxx0ja"/>`,
		"fallback": "selfhst:microsoft-365-light",
	});
}

export default Component;
