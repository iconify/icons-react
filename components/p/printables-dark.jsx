import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3d6jyb5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3d6jyb5a"/>`,
		"fallback": "selfhst:printables-dark",
	});
}

export default Component;
