import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrjr88hvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrjr88hvj"/>`,
		"fallback": "pixelarticons:phone",
	});
}

export default Component;
