import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erxpnib1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="erxpnib1b"/>`,
		"fallback": "si:more-muted-vert-circle-fill",
	});
}

export default Component;
