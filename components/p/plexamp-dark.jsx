import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oik3pl-qj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oik3pl-qj"/>`,
		"fallback": "selfhst:plexamp-dark",
	});
}

export default Component;
