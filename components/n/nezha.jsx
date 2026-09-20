import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fosqvzy9m.css';
import '../../css/g/gy7-5wpre.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fosqvzy9m"/><path class="gy7-5wpre"/>`,
		"fallback": "selfhst:nezha",
	});
}

export default Component;
