import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygs_qq5iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygs_qq5iv"/>`,
		"fallback": "uil:water-drop-slash",
	});
}

export default Component;
