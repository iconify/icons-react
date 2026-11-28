import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chkt45bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chkt45bph"/>`,
		"fallback": "noviair-light:shield-half",
	});
}

export default Component;
