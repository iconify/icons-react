import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebe8fjn1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebe8fjn1s"/>`,
		"fallback": "lucide:triangle",
	});
}

export default Component;
