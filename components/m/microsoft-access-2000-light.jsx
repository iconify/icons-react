import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec-0r3lvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec-0r3lvu"/>`,
		"fallback": "selfhst:microsoft-access-2000-light",
	});
}

export default Component;
