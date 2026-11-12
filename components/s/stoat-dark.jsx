import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl1k8xx3a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl1k8xx3a"/>`,
		"fallback": "selfhst:stoat-dark",
	});
}

export default Component;
