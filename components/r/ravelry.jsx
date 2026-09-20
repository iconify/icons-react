import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv0z-vbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv0z-vbxs"/>`,
		"fallback": "thesvg-color:ravelry",
	});
}

export default Component;
