import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox_vk2bqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox_vk2bqq"/>`,
		"fallback": "coolicons:more-horizontal-bulk-round",
	});
}

export default Component;
