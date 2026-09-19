import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib3rsc9pe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib3rsc9pe"/>`,
		"fallback": "ion:md-watch",
	});
}

export default Component;
