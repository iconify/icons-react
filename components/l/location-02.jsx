import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8e98cc_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8e98cc_h"/>`,
		"fallback": "hugeicons:location-02",
	});
}

export default Component;
