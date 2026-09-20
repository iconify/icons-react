import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyrsg_bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyrsg_bkj"/>`,
		"fallback": "mdi:store",
	});
}

export default Component;
