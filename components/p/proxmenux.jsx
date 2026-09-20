import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjejn750n.css';
import '../../css/i/ionc-bb6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjejn750n"/><path class="ionc-bb6w"/>`,
		"fallback": "selfhst:proxmenux",
	});
}

export default Component;
