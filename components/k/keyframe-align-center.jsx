import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqp1t41-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqp1t41-r"/>`,
		"fallback": "tabler:keyframe-align-center",
	});
}

export default Component;
