import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnms6sbik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnms6sbik"/>`,
		"fallback": "selfhst:southwest-airlines-dark",
	});
}

export default Component;
