import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd7hg6b0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd7hg6b0i"/>`,
		"fallback": "selfhst:microsoft-office-light",
	});
}

export default Component;
