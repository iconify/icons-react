import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij4obb7ix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij4obb7ix"/>`,
		"fallback": "selfhst:podfetch-light",
	});
}

export default Component;
