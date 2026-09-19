import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne6g2k11l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne6g2k11l"/>`,
		"fallback": "game-icons:mechanic-garage",
	});
}

export default Component;
