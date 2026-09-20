import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdq8rzv_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdq8rzv_p"/>`,
		"fallback": "mage:pin",
	});
}

export default Component;
