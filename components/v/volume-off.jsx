import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8z9mbq6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8z9mbq6d"/>`,
		"fallback": "lucide:volume-off",
	});
}

export default Component;
