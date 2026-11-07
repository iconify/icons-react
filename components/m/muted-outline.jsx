import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn48e2bxu.css';
import '../../css/q/qe1l0xb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn48e2bxu"/><path class="qe1l0xb2l"/>`,
		"fallback": "solar:muted-outline",
	});
}

export default Component;
