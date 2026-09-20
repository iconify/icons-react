import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um4-w3bkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um4-w3bkw"/>`,
		"fallback": "lucide:shell",
	});
}

export default Component;
