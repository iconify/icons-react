import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxom58b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxom58b-x"/>`,
		"fallback": "boxicons:siren",
	});
}

export default Component;
