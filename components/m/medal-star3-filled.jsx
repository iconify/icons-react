import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wksscnv_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wksscnv_g"/>`,
		"fallback": "reicon:medal-star3-filled",
	});
}

export default Component;
