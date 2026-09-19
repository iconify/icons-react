import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8c3l2b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8c3l2b3i"/>`,
		"fallback": "cbi:lyrion",
	});
}

export default Component;
