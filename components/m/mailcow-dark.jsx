import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha0-h7bjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha0-h7bjv"/>`,
		"fallback": "selfhst:mailcow-dark",
	});
}

export default Component;
