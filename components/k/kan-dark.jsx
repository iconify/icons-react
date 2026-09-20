import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjqfp0b7a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjqfp0b7a"/>`,
		"fallback": "selfhst:kan-dark",
	});
}

export default Component;
