import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofmw9kbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofmw9kbde"/>`,
		"fallback": "gridicons:microphone",
	});
}

export default Component;
