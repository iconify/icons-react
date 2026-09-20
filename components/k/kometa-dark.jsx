import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/womat1bsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="womat1bsf"/>`,
		"fallback": "selfhst:kometa-dark",
	});
}

export default Component;
