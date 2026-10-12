import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytrgcm7bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytrgcm7bm"/>`,
		"fallback": "lucide-extended:scan-heart-filled",
	});
}

export default Component;
