import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1p-1z10g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1p-1z10g"/>`,
		"fallback": "selfhst:romm-light",
	});
}

export default Component;
