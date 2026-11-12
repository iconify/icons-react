import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8-9ihkig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8-9ihkig"/>`,
		"fallback": "selfhst:itsm-ng",
	});
}

export default Component;
