import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnha55g-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnha55g-r"/>`,
		"fallback": "tabler:meter-square",
	});
}

export default Component;
