import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz85g5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz85g5bvd"/>`,
		"fallback": "lucide:map-plus",
	});
}

export default Component;
