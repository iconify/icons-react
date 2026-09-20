import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4kc3s.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-34.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4kc3s"/>`,
		"fallback": "line-md:volume-low-twotone",
	});
}

export default Component;
