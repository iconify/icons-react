import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcxs1-bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcxs1-bvk"/>`,
		"fallback": "withicons:mountain-solid",
	});
}

export default Component;
