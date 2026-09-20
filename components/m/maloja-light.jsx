import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkg_-fbqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkg_-fbqz"/>`,
		"fallback": "selfhst:maloja-light",
	});
}

export default Component;
