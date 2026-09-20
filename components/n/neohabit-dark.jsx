import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd5pp1qjf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd5pp1qjf"/>`,
		"fallback": "selfhst:neohabit-dark",
	});
}

export default Component;
