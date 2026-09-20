import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whoyo1bzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whoyo1bzv"/>`,
		"fallback": "selfhst:multi-scrobbler-light",
	});
}

export default Component;
