import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbt_o16fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbt_o16fj"/>`,
		"fallback": "boxicons:keyframe",
	});
}

export default Component;
