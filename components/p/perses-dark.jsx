import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oawho9b5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oawho9b5v"/>`,
		"fallback": "selfhst:perses-dark",
	});
}

export default Component;
