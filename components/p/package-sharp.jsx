import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmq1amubh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmq1amubh"/>`,
		"fallback": "keyline-icons:package-sharp",
	});
}

export default Component;
