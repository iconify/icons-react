import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s55lw4xho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s55lw4xho"/>`,
		"fallback": "lucide-extended:volume-x-filled",
	});
}

export default Component;
