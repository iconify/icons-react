import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz1m2xbru.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz1m2xbru"/>`,
		"fallback": "fa7-solid:rupee-sign",
	});
}

export default Component;
