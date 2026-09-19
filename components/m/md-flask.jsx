import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcbtzpi5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcbtzpi5a"/>`,
		"fallback": "ion:md-flask",
	});
}

export default Component;
