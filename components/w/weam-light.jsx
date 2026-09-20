import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuz27cc_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuz27cc_z"/>`,
		"fallback": "selfhst:weam-light",
	});
}

export default Component;
