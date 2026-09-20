import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2ru_1ven.css';
import '../../css/c/cpjb_5hdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2ru_1ven"/><path class="cpjb_5hdh"/>`,
		"fallback": "mage:location-fill",
	});
}

export default Component;
