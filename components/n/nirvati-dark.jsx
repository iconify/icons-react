import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjeh29bba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjeh29bba"/>`,
		"fallback": "selfhst:nirvati-dark",
	});
}

export default Component;
