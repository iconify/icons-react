import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irf4hbb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irf4hbb5j"/>`,
		"fallback": "tabler:logs",
	});
}

export default Component;
