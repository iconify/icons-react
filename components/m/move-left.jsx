import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk4txkbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk4txkbzy"/>`,
		"fallback": "lucide:move-left",
	});
}

export default Component;
