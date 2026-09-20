import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyi9b4b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyi9b4b2x"/>`,
		"fallback": "lucide:text-align-center",
	});
}

export default Component;
