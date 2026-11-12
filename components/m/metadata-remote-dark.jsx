import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn0rtcc5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn0rtcc5t"/>`,
		"fallback": "selfhst:metadata-remote-dark",
	});
}

export default Component;
