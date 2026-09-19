import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn9-wjb_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn9-wjb_l"/>`,
		"fallback": "game-icons:sarcophagus",
	});
}

export default Component;
