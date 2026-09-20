import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4wxyjb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4wxyjb-a"/>`,
		"fallback": "mage:mobile-phone-fill",
	});
}

export default Component;
