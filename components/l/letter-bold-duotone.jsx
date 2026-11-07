import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxyrlcb9h.css';
import '../../css/a/avjg2qbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxyrlcb9h"/><path class="avjg2qbrd"/>`,
		"fallback": "solar:letter-bold-duotone",
	});
}

export default Component;
