import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cic9kf80k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cic9kf80k"/>`,
		"fallback": "thesvg-color:void-linux",
	});
}

export default Component;
