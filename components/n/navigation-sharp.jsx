import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v47hdr-ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v47hdr-ij"/>`,
		"fallback": "keyline-icons:navigation-sharp",
	});
}

export default Component;
