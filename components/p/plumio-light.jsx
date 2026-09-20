import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv69e6bmw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv69e6bmw"/>`,
		"fallback": "selfhst:plumio-light",
	});
}

export default Component;
