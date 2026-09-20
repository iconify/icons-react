import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxlfg-bgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxlfg-bgn"/>`,
		"fallback": "reicon:volume-up3-filled",
	});
}

export default Component;
