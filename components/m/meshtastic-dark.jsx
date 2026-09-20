import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljv2b8c6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljv2b8c6a"/>`,
		"fallback": "selfhst:meshtastic-dark",
	});
}

export default Component;
