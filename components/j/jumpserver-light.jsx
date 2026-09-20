import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2mi4d5uu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2mi4d5uu"/>`,
		"fallback": "selfhst:jumpserver-light",
	});
}

export default Component;
