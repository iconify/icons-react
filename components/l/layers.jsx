import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p43yp_3ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p43yp_3ki"/>`,
		"fallback": "feather:layers",
	});
}

export default Component;
