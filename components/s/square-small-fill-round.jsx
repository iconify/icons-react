import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klo0mm2kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klo0mm2kn"/>`,
		"fallback": "coolicons:square-small-fill-round",
	});
}

export default Component;
