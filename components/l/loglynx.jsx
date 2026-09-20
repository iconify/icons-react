import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghx_bmbyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghx_bmbyx"/>`,
		"fallback": "selfhst:loglynx",
	});
}

export default Component;
