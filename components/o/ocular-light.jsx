import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n49rf8_vo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n49rf8_vo"/>`,
		"fallback": "selfhst:ocular-light",
	});
}

export default Component;
