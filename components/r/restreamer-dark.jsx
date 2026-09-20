import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voj_yiv9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voj_yiv9f"/>`,
		"fallback": "selfhst:restreamer-dark",
	});
}

export default Component;
