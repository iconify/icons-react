import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moufh4n1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moufh4n1k"/>`,
		"fallback": "selfhst:nutalert-dark",
	});
}

export default Component;
