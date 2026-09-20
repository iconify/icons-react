import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weck2_bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weck2_bvp"/>`,
		"fallback": "simple-icons:openfaas",
	});
}

export default Component;
