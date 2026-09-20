import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tolt5rb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tolt5rb_w"/>`,
		"fallback": "tabler:map-dollar",
	});
}

export default Component;
