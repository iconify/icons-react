import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkp95sn_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkp95sn_k"/>`,
		"fallback": "thesvg-color:opel",
	});
}

export default Component;
