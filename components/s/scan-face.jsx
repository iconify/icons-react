import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pumep9bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pumep9bwy"/>`,
		"fallback": "lucide:scan-face",
	});
}

export default Component;
