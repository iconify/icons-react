import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxqd53_2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxqd53_2e"/>`,
		"fallback": "lucide-extended:play-filled",
	});
}

export default Component;
