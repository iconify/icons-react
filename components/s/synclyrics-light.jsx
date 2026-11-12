import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isigbcz0e.css';
import '../../css/i/ix46jsv4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isigbcz0e"/><path class="ix46jsv4a"/>`,
		"fallback": "selfhst:synclyrics-light",
	});
}

export default Component;
