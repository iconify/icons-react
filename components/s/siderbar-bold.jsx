import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwvo3mbkm.css';
import '../../css/h/h_3msknem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwvo3mbkm"/><path clip-rule="evenodd" class="h_3msknem"/>`,
		"fallback": "solar:siderbar-bold",
	});
}

export default Component;
