import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkc2gm92p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkc2gm92p"/>`,
		"fallback": "lineicons:nextjs",
	});
}

export default Component;
