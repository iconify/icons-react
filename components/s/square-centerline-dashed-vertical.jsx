import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk_t0xb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk_t0xb1b"/>`,
		"fallback": "lucide:square-centerline-dashed-vertical",
	});
}

export default Component;
