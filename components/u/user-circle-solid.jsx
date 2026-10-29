import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx1tun3fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx1tun3fq"/>`,
		"fallback": "withicons:user-circle-solid",
	});
}

export default Component;
