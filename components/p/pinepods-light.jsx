import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlam0wbif.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlam0wbif"/>`,
		"fallback": "selfhst:pinepods-light",
	});
}

export default Component;
