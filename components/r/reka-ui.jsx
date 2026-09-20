import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk_1z5bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk_1z5bkt"/>`,
		"fallback": "thesvg-color:reka-ui",
	});
}

export default Component;
