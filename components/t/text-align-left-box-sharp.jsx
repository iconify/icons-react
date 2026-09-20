import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov1wd7b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov1wd7b2q"/>`,
		"fallback": "pixelarticons:text-align-left-box-sharp",
	});
}

export default Component;
