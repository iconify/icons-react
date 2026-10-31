import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6-ys596e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6-ys596e"/>`,
		"fallback": "coolicons:tags-fill-round",
	});
}

export default Component;
