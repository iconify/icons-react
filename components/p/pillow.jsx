import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw516dbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw516dbfa"/>`,
		"fallback": "lucide-lab:pillow",
	});
}

export default Component;
