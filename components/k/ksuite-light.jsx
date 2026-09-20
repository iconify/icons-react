import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivc1utbie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivc1utbie"/>`,
		"fallback": "selfhst:ksuite-light",
	});
}

export default Component;
