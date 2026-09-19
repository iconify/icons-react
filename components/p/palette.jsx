import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibpb4ib8a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibpb4ib8a"/>`,
		"fallback": "game-icons:palette",
	});
}

export default Component;
