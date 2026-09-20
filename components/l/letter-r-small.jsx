import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv_90lbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv_90lbnb"/>`,
		"fallback": "tabler:letter-r-small",
	});
}

export default Component;
