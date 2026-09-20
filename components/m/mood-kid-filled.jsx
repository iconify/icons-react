import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdu58zbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdu58zbyj"/>`,
		"fallback": "tabler:mood-kid-filled",
	});
}

export default Component;
