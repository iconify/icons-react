import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbz6o0bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbz6o0bkp"/>`,
		"fallback": "lucide:move-down-right",
	});
}

export default Component;
