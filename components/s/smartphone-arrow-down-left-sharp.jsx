import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww42af3bs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww42af3bs"/>`,
		"fallback": "keyline-icons:smartphone-arrow-down-left-sharp",
	});
}

export default Component;
