import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq84j_byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hq84j_byz"/>`,
		"fallback": "solar:spedometer-middle-bold",
	});
}

export default Component;
